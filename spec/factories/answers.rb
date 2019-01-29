# == Schema Information
#
# Table name: answers
#
#  id             :integer          not null, primary key
#  checked_out_at :datetime
#  description    :text
#  email          :string(255)
#  file           :string(255)
#  name           :string(255)
#  phone          :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#  vacancy_id     :integer
#

FactoryGirl.define do
  factory :answer do
    name "MyString"
email "MyString"
phone "MyString"
description "MyText"
vacancy_id 1
  end

end
