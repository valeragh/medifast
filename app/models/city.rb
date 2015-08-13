class City < ActiveRecord::Base
  has_many :clinics

  validates :name, presence: true

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
