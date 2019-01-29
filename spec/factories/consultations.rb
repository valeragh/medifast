# == Schema Information
#
# Table name: consultations
#
#  id                  :integer          not null, primary key
#  checked_out_at      :datetime
#  description         :text
#  email               :string(255)
#  name                :string(255)
#  phone               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  service_category_id :integer
#

FactoryGirl.define do
  factory :consultation do
    name "MyString"
email "MyString"
phone "MyString"
description "MyText"
service_id 1
checked_out_at "2015-08-13 10:02:52"
  end

end
