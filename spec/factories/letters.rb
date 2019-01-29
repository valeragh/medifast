# == Schema Information
#
# Table name: letters
#
#  id             :integer          not null, primary key
#  checked_out_at :datetime
#  description    :text
#  email          :string(255)
#  name           :string(255)
#  phone          :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#

FactoryGirl.define do
  factory :letter do
    name "MyString"
email "MyString"
description "MyText"
checked_out_at "2015-08-13 12:32:33"
  end

end
