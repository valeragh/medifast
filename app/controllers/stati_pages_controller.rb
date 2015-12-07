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
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def about_us
   @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end


  def faqs
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def search
    @service_categories = ServiceCategory.text_search(params[:query])
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end


  def vacansies
    @vacansies = Vacancy.all
    @clinics_show = Clinic.where("rang = 'Показать'").first(3)
  end

  def sitemap
    respond_to do |format|
      format.xml { render file: 'public/sitemaps/sitemap.xml' }
      format.html { redirect_to root_url }
    end
  end

  def robots
    robots = File.read(Rails.root + "config/robots.#{Rails.env}.txt")
    render :text => robots, :layout => false, :content_type => "text/plain"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def load_city
      @city = City.friendly.find(params[:city_id])
    end
end
