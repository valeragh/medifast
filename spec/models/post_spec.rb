# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  category    :string(255)
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  slug        :string(255)
#  title       :text
#  created_at  :datetime
#  updated_at  :datetime
#
# Indexes
#
#  index_posts_on_slug  (slug) UNIQUE
#

require 'spec_helper'

describe Post do
  pending "add some examples to (or delete) #{__FILE__}"
end
