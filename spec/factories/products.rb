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

FactoryGirl.define do
  factory :product do
    title "MyString"
description "MyText"
image_url "MyString"
price "9.99"
  end

end
