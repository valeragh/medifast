# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  address        :text
#  checked_out_at :datetime
#  email          :string(255)
#  name           :string(255)
#  pay_type       :string(255)
#  phone          :string(255)
#  shipping_type  :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#

require 'spec_helper'

describe Order do
  pending "add some examples to (or delete) #{__FILE__}"
end
