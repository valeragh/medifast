# == Schema Information
#
# Table name: answers
#
#  id             :integer          not null, primary key
#  checked_out_at :datetime
#  description    :text
#  email          :string(255)
#  file           :string(255)
#  name           :string(255)
#  phone          :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#  vacancy_id     :integer
#

require 'spec_helper'

describe Answer do
  pending "add some examples to (or delete) #{__FILE__}"
end
