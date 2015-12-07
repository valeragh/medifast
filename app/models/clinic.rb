class Clinic < ActiveRecord::Base
  belongs_to :city
  has_many :records
  has_many :doctors
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
