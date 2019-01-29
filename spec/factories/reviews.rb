# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  description :text
#  name        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

FactoryGirl.define do
  factory :review do
    name "MyString"
description "MyText"
  end

end
