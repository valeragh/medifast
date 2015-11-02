class LettersController < ApplicationController
  def index
    @letter = Letter.new
  end

  def new
    @letter = Letter.new
  end

  def create
    @letter = Letter.new(letter_params)

    respond_to do |format|
      if @letter.save
        UserMailer.letter_confirmation(@letter).deliver
        UserMailer.letter_admin_confirmation(@letter).deliver
        AdminMailer.letter_admin_confirmation(@letter).deliver
        format.html { redirect_to modal_path(modal: 'letter') }
        format.json { render action: 'show', status: :created, location: @letter }
      else
        format.html { render action: 'new' }
        format.json { render json: @letter.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def letter_params
      params.require(:letter).permit(:name, :email, :phone, :description, :checked_out_at)
    end
end
