class DoctorsController < ApplicationController

  def index
  	@doctors = Doctor.all.order(:tail)
    @doctors_slide = Doctor.all.sample(5)
    @clinics = Clinic.all
    @clinics_show = Clinic.where("rang = 'Показать'")
  end

  def show
  	@doctor = Doctor.friendly.find(params[:doctor_id])
    @certificates = @doctor.certificate
    @clinics_show = Clinic.where("rang = 'Показать'")
  end

  def clinic
  	@clinic = Clinic.friendly.find(params[:clinic_id])
  	@doctors = @clinic.doctors.order(:tail)
  	@clinics = Clinic.all
  	@doctors_slide = Doctor.all.sample(5)
    @clinics_show = Clinic.where("rang = 'Показать'")
  end

end
