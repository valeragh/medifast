class RecordsController < ApplicationController

  def index
    @record = Record.new
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def new
    @record = Record.new
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def create
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
    @record = Record.new(record_params)

    respond_to do |format|
      if @record.save
        UserMailer.record_confirmation(@record).deliver
        UserMailer.record_admin_confirmation(@record).deliver
        format.html { redirect_to modal_path(modal: 'record') }
        format.json { render action: 'show', status: :created, location: @record }
      else
        format.html { render action: 'new' }
        format.json { render json: @record.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def record_params
      params.require(:record).permit(:name, :phone, :service_category_id, :email, :clinic_id, :description, :checked_out_at)
    end
end
