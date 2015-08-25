class ChiefDoctor < ActiveRecord::Base
  validates :name, :position, :status, :image, presence: true
  mount_uploader :image, ImageUploader
  STATUS_TYPES = [ "Показать", "Скрыть" ]
end
