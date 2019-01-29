# == Schema Information
#
# Table name: invoices
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  number     :string(255)
#  created_at :datetime
#  updated_at :datetime
#

FactoryGirl.define do
  factory :invoice do
    number "MyString"
name "MyString"
  end

end
