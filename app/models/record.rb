# == Schema Information
#
# Table name: records
#
#  id                  :integer          not null, primary key
#  checked_out_at      :datetime
#  description         :text
#  email               :string(255)
#  name                :string(255)
#  phone               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  clinic_id           :integer
#  service_category_id :integer
#
# Indexes
#
#  index_records_on_checked_out_at  (checked_out_at)
#

class Record < ActiveRecord::Base
  belongs_to :service_category
  belongs_to :clinic

  validates :name, :phone, :email, :service_category_id, :description, :clinic_id, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates_format_of :phone, :with => /(?<!\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/x

  scope :in_progress, ->{where("records.checked_out_at IS NULL")}
  scope :complete, -> {where("records.checked_out_at IS NOT NULL")}

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
