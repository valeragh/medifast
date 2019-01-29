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

require 'spec_helper'

describe LineItem do
  pending "add some examples to (or delete) #{__FILE__}"
end
