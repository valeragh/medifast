# == Schema Information
#
# Table name: sales
#
#  id          :integer          not null, primary key
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  rang        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

FactoryGirl.define do
  factory :sale do
    name "MyString"
image_url "MyString"
description "MyText"
  end

end
