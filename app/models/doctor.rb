class Doctor < ActiveRecord::Base
	belongs_to :clinic
	has_many :certificate
	mount_uploader :image_url, ImageUploader

	validates :name, :position, :image_url, :description, :clinic_id, presence: true
  
  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
