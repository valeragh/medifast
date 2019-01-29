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

FactoryGirl.define do
  factory :line_item do
    product_id 1
cart_id 1
  end

end
