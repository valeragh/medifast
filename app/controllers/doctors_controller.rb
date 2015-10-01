class DoctorsController < ApplicationController

  def index
  	@doctors = Doctor.all.order(:tail)
    @doctors_slide = Doctor.all.sample(5)
    @clinics = Clinic.all
  end

  def show
  	@doctor = Doctor.friendly.find(params[:doctor_id])
    @certificates = @doctor.certificate
  end

  def clinic
  	@clinic = Clinic.friendly.find(params[:clinic_id])
  	@doctors = @clinic.doctors
  	@clinics = Clinic.all
  	@doctors_slide = Doctor.all.sample(5)
  end

end
