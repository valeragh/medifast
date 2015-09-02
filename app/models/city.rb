class City < ActiveRecord::Base
  has_many :clinics
  mount_uploader :image_url, ImageUploader
  validates :name, :image_url, presence: true

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
