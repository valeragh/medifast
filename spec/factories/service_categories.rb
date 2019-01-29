# == Schema Information
#
# Table name: service_categories
#
#  id              :integer          not null, primary key
#  image_small_url :string(255)
#  image_url       :string(255)
#  name            :string(255)
#  rang            :string(255)
#  slug            :string(255)
#  tail            :integer
#  video_url       :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

FactoryGirl.define do
  factory :service_category do
    name "MyString"
image_url "MyString"
slug "MyString"
  end

end
