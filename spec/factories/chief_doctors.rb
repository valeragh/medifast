# == Schema Information
#
# Table name: chief_doctors
#
#  id         :integer          not null, primary key
#  image      :string(255)
#  name       :string(255)
#  position   :string(255)
#  status     :string(255)
#  created_at :datetime
#  updated_at :datetime
#

FactoryGirl.define do
  factory :chief_doctor do
    name "MyString"
status "MyString"
position "MyString"
image "MyString"
  end

end
