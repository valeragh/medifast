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

class DoctorClinic < ActiveRecord::Base
	belongs_to :clinic
  belongs_to :doctor
end
