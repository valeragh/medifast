# == Schema Information
#
# Table name: records
#
#  id                  :integer          not null, primary key
#  checked_out_at      :datetime
#  description         :text
#  email               :string(255)
#  name                :string(255)
#  phone               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  clinic_id           :integer
#  service_category_id :integer
#
# Indexes
#
#  index_records_on_checked_out_at  (checked_out_at)
#

FactoryGirl.define do
  factory :record do
    service_id 1
name "MyString"
email "MyString"
description "MyText"
clinic_id 1
phone "MyString"
  end

end
