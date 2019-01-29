# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  description :text
#  name        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Review < ActiveRecord::Base

  validates :name, :description, presence: true
  validates :description, length: {
    minimum: 2,
    maximum: 100,
    too_short: "должен содержать не менее %{count} символов",
    too_long: "должен содержать не более %{count} символов"
  }

end
