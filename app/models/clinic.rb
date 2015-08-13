class Clinic < ActiveRecord::Base
  belongs_to :city

  geocoded_by :address
  after_validation :geocode

  validates :city_id, :address, :contacts, :description, :title , presence: true

  extend FriendlyId
  friendly_id :address, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
