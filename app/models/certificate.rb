# == Schema Information
#
# Table name: certificates
#
#  id         :integer          not null, primary key
#  image_url  :string(255)
#  created_at :datetime
#  updated_at :datetime
#  doctor_id  :string(255)
#

class Certificate < ActiveRecord::Base
	belongs_to :doctor
	mount_uploader :image_url, ImageUploader
end
