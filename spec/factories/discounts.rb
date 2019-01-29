# == Schema Information
#
# Table name: discounts
#
#  id          :integer          not null, primary key
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  status      :string(255)
#  tail        :integer
#  created_at  :datetime
#  updated_at  :datetime
#

FactoryGirl.define do
  factory :discount do
    name "MyString"
description "MyText"
status "MyString"
image_url "MyString"
  end

end
