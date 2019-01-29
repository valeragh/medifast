# == Schema Information
#
# Table name: discounts
#
#  id          :integer          not null, primary key
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  status      :string(255)
#  tail        :integer
#  created_at  :datetime
#  updated_at  :datetime
#

require 'spec_helper'

describe Discount do
  pending "add some examples to (or delete) #{__FILE__}"
end
