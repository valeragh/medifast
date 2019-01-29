# == Schema Information
#
# Table name: letters
#
#  id             :integer          not null, primary key
#  checked_out_at :datetime
#  description    :text
#  email          :string(255)
#  name           :string(255)
#  phone          :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#

require 'spec_helper'

describe Letter do
  pending "add some examples to (or delete) #{__FILE__}"
end
