class StatiPagesController < ApplicationController
  before_action :load_city, only: [:show]

  def index
    @service_category = ServiceCategory.all
    #@service_category = ServiceCategory.where(("rang = 'Высокий'"))
    @cities = City.all
    @reviews = Review.all.sample(1)
    @posts_slide = Post.all.first(5)
  end

  def about_us
  end


  def faqs
  end

  def vacansies
    @vacansies = Vacancy.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def load_city
      @city = City.friendly.find(params[:city_id])
    end
end
