class Doctor < ActiveRecord::Base
	belongs_to :clinic
  belongs_to :service_category
	has_many :certificate
	mount_uploader :image_url, ImageUploader

	validates :name, :position, :image_url, :description, :tail, :clinic_id, :service_category_id, presence: true

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
