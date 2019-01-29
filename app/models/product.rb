# == Schema Information
#
# Table name: products
#
#  id                  :integer          not null, primary key
#  description         :text
#  image_url           :string(255)
#  price               :decimal(8, 2)
#  status              :string(255)
#  title               :string(255)
#  unit                :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  product_category_id :integer
#

class Product < ActiveRecord::Base
  belongs_to :product_category
  has_many :line_items
  has_many :orders, :through => :line_items

  before_destroy :ensure_not_referenced_by_any_line_item
  mount_uploader :image_url, ImageUploader
  validates :title, :status, :description, :price, :unit, presence: true
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
