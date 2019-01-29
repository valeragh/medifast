# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  image_url  :string(255)
#  name       :string(255)
#  slug       :string(255)
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  index_cities_on_slug  (slug) UNIQUE
#

FactoryGirl.define do
  factory :city do
    name "MyString"
  end

end
