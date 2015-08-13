class Letter < ActiveRecord::Base

  validates :name, :email, :description, presence: true

  scope :in_progress, ->{where("letters.checked_out_at IS NULL")}
  scope :complete, -> {where("letters.checked_out_at IS NOT NULL")}

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
