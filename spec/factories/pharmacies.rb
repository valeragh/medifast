# == Schema Information
#
# Table name: pharmacies
#
#  id          :integer          not null, primary key
#  address     :string(255)
#  contacts    :text
#  description :text
#  latitude    :float
#  longitude   :float
#  rang        :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  city_id     :integer
#

FactoryGirl.define do
  factory :pharmacy do
    city_id 1
address "MyString"
contacts "MyText"
latitude 1.5
longitude 1.5
rang "MyString"
title "MyString"
  end

end
