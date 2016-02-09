class Discount < ActiveRecord::Base
  mount_uploader :image_url, ImageUploader
  validates :name, :status, :image_url, :description, presence: true

  STATUS_TYPES = [ "Показать", "Скрыть" ]
end
