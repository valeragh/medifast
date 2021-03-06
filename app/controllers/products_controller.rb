class ProductsController < ApplicationController
  before_action :load_product_category, only: [:show]

  def index
    @pharmacies_sale = Discount.where("status = 'Показать'").order(:tail)
    @product_categories = ProductCategory.where("status = 'Показать'")
    @products = Product.where("status = 'Показать'")
    @products_not_available = Product.where("status = 'Нет в наличие'")
    @cart = current_cart
    @pharmacies_show = Pharmacy.where("rang = 'Показать'").first(3)
    @pharmacies = Pharmacy.all.order(:city_id)
    @hash = Gmaps4rails.build_markers(@pharmacies) do |pharmacy, marker|
      marker.lat pharmacy.latitude
      marker.lng pharmacy.longitude
      marker.infowindow pharmacy.description
      marker.picture({
        "url" => view_context.image_url('medifast_map_pointer.png'),
        "width" => 46,
        "height" => 57})
    end
  end

  def show
    @pharmacies_sale = Discount.where("status = 'Показать'").order(:tail)
    @pharmacies_show = Pharmacy.where("rang = 'Показать'").first(3)
    @product_categories = ProductCategory.where("status = 'Показать'")
    @product_category = ProductCategory.friendly.find(params[:products_category_id])
    @products = @product_category.products.where("status = 'Показать'")
    @products_not_available = @product_category.products.where("status = 'Нет в наличие'")
    @cart = current_cart
    @pharmacies_show = Pharmacy.where("rang = 'Показать'").first(3)
    @pharmacies = Pharmacy.all.order(:city_id)
    @hash = Gmaps4rails.build_markers(@pharmacies) do |pharmacy, marker|
      marker.lat pharmacy.latitude
      marker.lng pharmacy.longitude
      marker.infowindow pharmacy.description
      marker.picture({
        "url" => view_context.image_url('medifast_map_pointer.png'),
        "width" => 46,
        "height" => 57})
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def load_product_category
      @product_category = ProductCategory.friendly.find(params[:products_category_id])
    end
end
