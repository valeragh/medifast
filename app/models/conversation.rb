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

class Conversation < ActiveRecord::Base
  belongs_to :sender, :foreign_key => :sender_id, class_name: 'User'
  belongs_to :recipient, :foreign_key => :recipient_id, class_name: 'User'

  has_many :messages, dependent: :destroy

  validates_uniqueness_of :sender_id, :scope => :recipient_id

  scope :involving, -> (user) do
    where("conversations.sender_id =? OR conversations.recipient_id =?",user.id,user.id)
  end

  scope :between, -> (sender_id,recipient_id) do
    where("(conversations.sender_id = ? AND conversations.recipient_id =?) OR (conversations.sender_id = ? AND conversations.recipient_id =?)", sender_id,recipient_id, recipient_id, sender_id)
  end
end
