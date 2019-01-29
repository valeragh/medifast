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

FactoryGirl.define do
  factory :conversation do
    sender_id 1
recipient_id 1
  end

end
