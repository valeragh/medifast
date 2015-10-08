class ServiceCategory < ActiveRecord::Base
  has_many :services, :dependent => :destroy
  has_many :consultations
  has_many :records
  has_many :doctors
  has_and_belongs_to_many :clinics
  mount_uploader :image_url, ImageUploader
  mount_uploader :image_small_url, ImageUploader

  validates :name, :tail, :rang, :image_url, :image_small_url, presence: true
  validates :name, length: {
    minimum: 2,
    maximum: 30,
    too_short: "должен содержать не менее %{count} символа",
    too_long: "должен содержать не более %{count} символов"
  }
  validates_format_of :video_url, :with => /^http:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]*)$/


  include PgSearch
  pg_search_scope :search, against: [:name],
  associated_against: {services: [:name, :description, :description_two]}

  def self.text_search(query)
    if query.present?
      search(query)
    else
      all
    end
  end
  RANG_TYPES = [ "Показать", "Скрыть" ]

  #def self.order_by_case
    #ret = "CASE"
    #RANG_TYPES.each_with_index do |p, i|
      #ret << " WHEN rang = '#{p}' THEN #{i}"
    #end
    #ret << " END"
  #end

  #scope :order_by_priority, -> {order(order_by_case)}

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
