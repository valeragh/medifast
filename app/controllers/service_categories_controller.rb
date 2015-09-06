class ServiceCategoriesController < ApplicationController
  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def service_category_params
      params.require(:service_category).permit(:name, :tail, :image_url, :image_small_url, :clinic_ids => [])
    end
end