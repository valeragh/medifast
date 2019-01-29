# == Schema Information
#
# Table name: consultations
#
#  id                  :integer          not null, primary key
#  checked_out_at      :datetime
#  description         :text
#  email               :string(255)
#  name                :string(255)
#  phone               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  service_category_id :integer
#

class Consultation < ActiveRecord::Base

  belongs_to :service_category

  validates :name, :phone, :email, :description, :service_category_id, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates_format_of :phone, :with => /(?<!\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/x

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
