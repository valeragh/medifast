class Doctor < ActiveRecord::Base
	include PgSearch
  multisearchable :against => [:name, :description]
  belongs_to :service_category
  belongs_to :clinic
	has_many :certificate, :dependent => :destroy
	mount_uploader :image_url, ImageUploader



	validates :name, :position, :image_url, :description, :tail, :clinic_id, :service_category_id, presence: true

  after_commit  :update_sitemap
  after_save :reindex

  def update_sitemap
    system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:generate")
    #system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:symlink")
  end

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end

  private

  def reindex
    PgSearch::Multisearch.rebuild(Doctor)
  end
end
