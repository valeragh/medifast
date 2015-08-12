class ProceduresController < ApplicationController
  before_action :load_service_category, only: [:show]


  def index
    @service_categories = ServiceCategory.all.order_by_priority
  end

  def show
    @service_category = ServiceCategory.friendly.find(params[:service_category_id])
    @services = @service_category.services.order_by_priority
  end

  def show_procedur
    @service_category = ServiceCategory.friendly.find(params[:service_category_id])
    @service = @service_category.services.friendly.find(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def load_service_category
      @service_category = ServiceCategory.friendly.find(params[:service_category_id])
    end

end
