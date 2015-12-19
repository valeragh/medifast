class Advertising < ActiveRecord::Base
  validates :name, :rang, :image_url, :description, presence: true
  mount_uploader :image_url, ImageUploader

  RANG_TYPES = [ "Показать", "Скрыть" ]
end
