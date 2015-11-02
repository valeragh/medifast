class AnswersController < ApplicationController
  def index
    @answer = Answer.new
  end

  def new
    @answer = Answer.new
  end

  def create
    @answer = Answer.new(answer_params)

    respond_to do |format|
      if @answer.save
        UserMailer.answer_confirmation(@answer).deliver
        AdminMailer.answer_admin_confirmation(@answer).deliver
        format.html { redirect_to modal_path(modal: 'answer_vacancy') }
        format.json { render action: 'show', status: :created, location: @answer }
      else
        format.html { render action: 'new' }
        format.json { render json: @answer.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def answer_params
      params.require(:answer).permit(:name, :phone, :vacancy_id, :email, :file, :description, :checked_out_at)
    end
end
