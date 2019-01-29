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

FactoryGirl.define do
  factory :order do
    name "MyString"
address "MyText"
email "MyString"
pay_type "MyString"
shipping_type "MyString"
phone "MyString"
  end

end
