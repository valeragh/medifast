# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  image_url  :string(255)
#  name       :string(255)
#  slug       :string(255)
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  index_cities_on_slug  (slug) UNIQUE
#

class City < ActiveRecord::Base
  has_many :clinics, :dependent => :destroy
  has_many :pharmacies, :dependent => :destroy
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
