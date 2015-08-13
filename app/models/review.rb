class Review < ActiveRecord::Base

  validates :name, :description, presence: true
  validates :description, length: {
    minimum: 2,
    maximum: 100,
    too_short: "должен содержать не менее %{count} символов",
    too_long: "должен содержать не более %{count} символов"
  }

end
