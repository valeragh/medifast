class Doctor < ActiveRecord::Base
	belongs_to :clinic

	validates :name, :position, :image_url, :description, :clinic_id, presence: true
  
  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
