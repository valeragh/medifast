# == Schema Information
#
# Table name: services
#
#  id                  :integer          not null, primary key
#  description         :text
#  description_two     :text
#  image_one_url       :string(255)
#  image_two_url       :string(255)
#  image_url           :string(255)
#  name                :string(255)
#  rang                :string(255)
#  slug                :string(255)
#  video_url           :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  service_category_id :integer
#

require 'spec_helper'

describe Service do
  pending "add some examples to (or delete) #{__FILE__}"
end
