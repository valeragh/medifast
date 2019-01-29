# == Schema Information
#
# Table name: pharmacies
#
#  id          :integer          not null, primary key
#  address     :string(255)
#  contacts    :text
#  description :text
#  latitude    :float
#  longitude   :float
#  rang        :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  city_id     :integer
#

class Pharmacy < ActiveRecord::Base
  belongs_to :city

  geocoded_by :address
  after_validation :geocode

  validates :city_id, :address, :description, :rang, :contacts, :title , presence: true

  RANG_TYPES = [ "Показать", "Скрыть" ]
end
