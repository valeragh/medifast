class StatiPagesController < ApplicationController
  before_action :load_city, only: [:show]

  def index
    @cities = City.all
    @reviews = Review.all.sample(1)
  end

  def about_us
  end


  def faqs
  end

  def vacancies
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def load_city
      @city = City.friendly.find(params[:city_id])
    end
end
