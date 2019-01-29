# == Schema Information
#
# Table name: product_categories
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  slug       :string(255)
#  status     :string(255)
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  index_product_categories_on_slug  (slug) UNIQUE
#

FactoryGirl.define do
  factory :product_category do
    name "MyString"
  end

end
