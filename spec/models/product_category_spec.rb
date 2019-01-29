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

require 'spec_helper'

describe ProductCategory do
  pending "add some examples to (or delete) #{__FILE__}"
end
