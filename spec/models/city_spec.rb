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

require 'spec_helper'

describe City do
  pending "add some examples to (or delete) #{__FILE__}"
end
