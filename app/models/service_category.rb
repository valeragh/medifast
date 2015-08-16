class ServiceCategory < ActiveRecord::Base
  has_many :services, :dependent => :destroy
  mount_uploader :image_url, ImageUploader
  mount_uploader :image_small_url, ImageUploader

  validates :name, :rang, :image_url, :image_small_url, presence: true
  validates :name, length: {
    minimum: 2,
    maximum: 30,
    too_short: "должен содержать не менее %{count} символа",
    too_long: "должен содержать не более %{count} символов"
  }

  RANG_TYPES = [ "Высокий", "Средний", "Низкий" ]

  def self.order_by_case
    ret = "CASE"
    RANG_TYPES.each_with_index do |p, i|
      ret << " WHEN rang = '#{p}' THEN #{i}"
    end
    ret << " END"
  end

  scope :order_by_priority, -> {order(order_by_case)}

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
