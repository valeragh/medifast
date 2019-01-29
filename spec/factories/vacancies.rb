# == Schema Information
#
# Table name: vacancies
#
#  id          :integer          not null, primary key
#  description :text
#  name        :string(255)
#  status      :string(255)      default("Показать")
#  created_at  :datetime
#  updated_at  :datetime
#

FactoryGirl.define do
  factory :vacancy do
    name "MyString"
description "MyText"
  end

end
