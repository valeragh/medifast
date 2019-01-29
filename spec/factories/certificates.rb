# == Schema Information
#
# Table name: certificates
#
#  id         :integer          not null, primary key
#  image_url  :string(255)
#  created_at :datetime
#  updated_at :datetime
#  doctor_id  :string(255)
#

FactoryGirl.define do
  factory :certificate do
    doctor_id "MyString"
image_url "MyString"
  end

end
