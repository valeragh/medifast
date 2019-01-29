# == Schema Information
#
# Table name: clinics
#
#  id          :integer          not null, primary key
#  address     :string(255)
#  contacts    :text
#  description :text
#  latitude    :float
#  longitude   :float
#  rang        :string(255)
#  slug        :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  city_id     :integer
#
# Indexes
#
#  index_clinics_on_slug  (slug) UNIQUE
#

FactoryGirl.define do
  factory :clinic do
    city_id 1
address "MyString"
contacts "MyText"
latitude 1.5
longitude 1.5
description "MyText"
title "MyString"
  end

end
