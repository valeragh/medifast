class StatiPagesController < ApplicationController
  before_action :load_city, only: [:show]

  def index
    #@service_category = ServiceCategory.all.first(10)
    @service_category = ServiceCategory.where(("rang = 'Показать'"))
    @cities = City.all
    @reviews = Review.all
    @posts_slide = Post.all.first(5)
    @sales = Sale.where("rang = 'Показать'")
    @advertisings = Advertising.where("rang = 'Показать'")
    @chief_doctors = ChiefDoctor.where("status = 'Показать'")
  end

  def about_us
  end


  def faqs
  end

  def search
    @service_categories = ServiceCategory.text_search(params[:query])
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
