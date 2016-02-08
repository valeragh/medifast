class City < ActiveRecord::Base
  has_many :clinics
  has_many :pharmacies
  mount_uploader :image_url, ImageUploader
  validates :name, :image_url, presence: true

  after_commit  :update_sitemap

  def update_sitemap
    system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:generate")
    #system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:symlink")
  end

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
