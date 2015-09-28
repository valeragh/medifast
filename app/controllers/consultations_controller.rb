class ConsultationsController < ApplicationController
  def index
    @consultation = Consultation.new
  end

  def new
    @consultation = Consultation.new
  end

  def create
    @consultation = Consultation.new(consultation_params)

    respond_to do |format|
      if @consultation.save
        UserMailer.consultation_confirmation(@consultation).deliver
        UserMailer.consultation_admin_confirmation(@consultation).deliver
        format.html { redirect_to root_path, notice: 'Запрос на консультацию удачно создан, наши администраторы саяжутся с Вами в ближайшее время' }
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
