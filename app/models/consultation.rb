class Consultation < ActiveRecord::Base

  belongs_to :service

  validates :name, :phone, :service_id, presence: true
  validates :phone, length: {
    minimum: 6,
    maximum: 13,
    too_short: "должен содержать не менее %{count} цифр",
    too_long: "должен содержать не более %{count} цифр"
  }

  scope :in_progress, ->{where("consultations.checked_out_at IS NULL")}
  scope :complete, -> {where("consultations.checked_out_at IS NOT NULL")}

  COMPLETE = "complete"
  IN_PROGRESS = "новый"

  def checkout!
    self.checked_out_at = Time.now
    self.save
  end

  def state
    checked_out_at.nil? ? IN_PROGRESS : COMPLETE
  end

end