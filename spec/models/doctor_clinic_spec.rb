# == Schema Information
#
# Table name: doctor_clinics
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  clinic_id  :integer
#  doctor_id  :integer
#
# Indexes
#
#  index_doctor_clinics_on_clinic_id  (clinic_id)
#  index_doctor_clinics_on_doctor_id  (doctor_id)
#

require 'spec_helper'

describe DoctorClinic do
  pending "add some examples to (or delete) #{__FILE__}"
end
