class RecordsController < ApplicationController

  def index
    @record = Record.new
  end

  def new
    @record = Record.new
  end

  def create
    @record = Record.new(record_params)

    respond_to do |format|
      if @record.save
        format.html { redirect_to root_path, notice: 'Запись на прием удачно создана, наши администраторы свяжутся с Вами в ближайшее время' }
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
      params.require(:record).permit(:name, :phone, :service_id, :email, :clinic_id, :description, :checked_out_at)
    end
end
