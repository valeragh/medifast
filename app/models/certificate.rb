class Certificate < ActiveRecord::Base
	belongs_to :doctor
	mount_uploader :image_url, ImageUploader
end
