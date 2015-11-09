class ContestsController < ApplicationController
  before_filter :load_survey, only: [:new, :create]

  def index
    @surveys = Survey::Survey.active
  end

  def show
    @attempt = Survey::Attempt.find_by(id: params[:id])
    render :access_error if current_user.id != @attempt.participant_id
  end

  def new
    @participant = current_user

    unless @survey.nil?
      @attempt = @survey.attempts.new
      @attempt.answers.build
    end
  end

  private
    def load_survey
      @survey = Survey::Survey.find_by(id: params[:survey_id])
    end
end
