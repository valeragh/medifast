class ProductCategory < ActiveRecord::Base
  has_many :products, :dependent => :destroy

  validates :name, length: {
    minimum: 2,
    maximum: 20,
    too_short: "должен содержать не менее %{count} символа",
    too_long: "должен содержать не более %{count} символов"
  }
  STATUS_TYPES = [ "Скрыть", "Показать" ]

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
