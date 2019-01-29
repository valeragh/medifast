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
#  index_doctor_clinics_on_clinic_id  (clinic_id) UNIQUE
#  index_doctor_clinics_on_doctor_id  (doctor_id) UNIQUE
#

FactoryGirl.define do
  factory :doctor_clinic do
    doctor_id 1
clinic_id 1
  end

end
