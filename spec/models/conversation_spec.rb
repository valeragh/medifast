# == Schema Information
#
# Table name: conversations
#
#  id           :integer          not null, primary key
#  created_at   :datetime
#  updated_at   :datetime
#  recipient_id :integer
#  sender_id    :integer
#
# Indexes
#
#  index_conversations_on_recipient_id  (recipient_id)
#  index_conversations_on_sender_id     (sender_id)
#

require 'spec_helper'

describe Conversation do
  pending "add some examples to (or delete) #{__FILE__}"
end
