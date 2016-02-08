class Pharmacy < ActiveRecord::Base
  belongs_to :city

  geocoded_by :address
  after_validation :geocode

  validates :city_id, :address, :rang, :contacts, :title , presence: true

  RANG_TYPES = [ "Показать", "Скрыть" ]
end
