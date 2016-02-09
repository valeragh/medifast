class Product < ActiveRecord::Base
  belongs_to :product_category
  has_many :line_items
  has_many :orders, :through => :line_items

  before_destroy :ensure_not_referenced_by_any_line_item
  mount_uploader :image_url, ImageUploader
  validates :title, :status, :image_url, :description, :price, :unit, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 0.01}

  STATUS_TYPES = [ "Скрыть", "Показать", "Нет в наличие" ]

  private

  def ensure_not_referenced_by_any_line_item
    if line_items.empty?
      return true
    else
      errors.add(:base, 'have line item')
      return false
    end
  end
end
