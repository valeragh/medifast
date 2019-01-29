# == Schema Information
#
# Table name: pharmacies
#
#  id          :integer          not null, primary key
#  address     :string(255)
#  contacts    :text
#  description :text
#  latitude    :float
#  longitude   :float
#  rang        :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  city_id     :integer
#

require 'spec_helper'

describe Pharmacy do
  pending "add some examples to (or delete) #{__FILE__}"
end
