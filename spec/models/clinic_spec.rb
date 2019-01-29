# == Schema Information
#
# Table name: clinics
#
#  id          :integer          not null, primary key
#  address     :string(255)
#  contacts    :text
#  description :text
#  latitude    :float
#  longitude   :float
#  rang        :string(255)
#  slug        :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  city_id     :integer
#
# Indexes
#
#  index_clinics_on_slug  (slug) UNIQUE
#

require 'spec_helper'

describe Clinic do
  pending "add some examples to (or delete) #{__FILE__}"
end
