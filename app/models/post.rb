class Post < ActiveRecord::Base
  mount_uploader :image_url, ImageUploader
  validates :name, :title, :category, :image_url, :description, presence: true

  CATEGORY_TYPES = [ "Стационар", "Поликлиника", "Филиалы", "Специалисты" ]

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
