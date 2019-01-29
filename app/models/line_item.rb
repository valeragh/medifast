# == Schema Information
#
# Table name: line_items
#
#  id         :integer          not null, primary key
#  quantity   :integer          default(1)
#  created_at :datetime
#  updated_at :datetime
#  cart_id    :integer
#  order_id   :integer
#  product_id :integer
#

class LineItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  belongs_to :cart

  def total_price
    product.price * quantity
  end
end
