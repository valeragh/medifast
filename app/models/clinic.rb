# == Schema Information
#
# Table name: clinics
#
#  id          :integer          not null, primary key
#  address     :string(255)
#  contacts    :text
#  description :text
#  latitude    :float
#  longitude   :float
#  rang        :string(255)
#  slug        :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  city_id     :integer
#
# Indexes
#
#  index_clinics_on_slug  (slug) UNIQUE
#

class Clinic < ActiveRecord::Base
  belongs_to :city
  has_many :records
  has_many :doctor_clinics, dependent: :destroy
  has_many :doctors, through: :doctor_clinics
  has_many :users
  has_and_belongs_to_many :service_categories

  geocoded_by :address
  after_validation :geocode

  validates :city_id, :address, :rang, :contacts, :description, :title , presence: true

  after_commit  :update_sitemap
  RANG_TYPES = [ "Показать", "Скрыть" ]

  def update_sitemap
    system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:generate")
    #system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:symlink")
  end

  extend FriendlyId
  friendly_id :address, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
