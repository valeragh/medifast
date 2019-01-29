# == Schema Information
#
# Table name: doctors
#
#  id                  :integer          not null, primary key
#  description         :text
#  image_url           :string(255)
#  name                :string(255)
#  position            :string(255)
#  slug                :string(255)
#  tail                :integer
#  created_at          :datetime
#  updated_at          :datetime
#  clinic_id           :integer
#  service_category_id :integer
#
# Indexes
#
#  index_doctors_on_slug  (slug) UNIQUE
#

require 'spec_helper'

describe Doctor do
  pending "add some examples to (or delete) #{__FILE__}"
end
