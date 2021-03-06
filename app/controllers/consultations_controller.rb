class ConsultationsController < ApplicationController
  def index
    @consultation = Consultation.new
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def new
    @consultation = Consultation.new
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def create
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
    @consultation = Consultation.new(consultation_params)

    respond_to do |format|
      if @consultation.save
        UserMailer.consultation_confirmation(@consultation).deliver
        UserMailer.consultation_admin_confirmation(@consultation).deliver
        format.html { redirect_to modal_path(modal: 'consultation') }
        format.json { render action: 'show', status: :created, location: @consultation }
      else
        format.html { render action: 'new' }
        format.json { render json: @consultation.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def consultation_params
      params.require(:consultation).permit(:name, :phone, :service_category_id, :email, :description, :checked_out_at)
    end
end
