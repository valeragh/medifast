class Advertising < ActiveRecord::Base
	mount_uploader :image_url, ImageUploader
	validates :name, :rang, :image_url, :description, presence: true

	RANG_TYPES = [ "Показать", "Скрыть" ]
end
