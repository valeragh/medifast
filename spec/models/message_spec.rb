# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  body            :text
#  created_at      :datetime
#  updated_at      :datetime
#  conversation_id :integer
#  user_id         :integer
#
# Indexes
#
#  index_messages_on_conversation_id  (conversation_id)
#  index_messages_on_user_id          (user_id)
#

require 'spec_helper'

describe Message do
  pending "add some examples to (or delete) #{__FILE__}"
end
