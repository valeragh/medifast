class ContactsController < ApplicationController
  before_action :load_city, only: [:show]

  def index
    @clinics = Clinic.all.order(:city_id)
    @hash = Gmaps4rails.build_markers(@clinics) do |clinic, marker|
      marker.lat clinic.latitude
      marker.lng clinic.longitude
      marker.infowindow clinic.description
    end
    @citys = City.all
  end

  def show
    @city = City.friendly.find(params[:city_id])
    @clinics = @city.clinics
    @hash = Gmaps4rails.build_markers(@clinics) do |clinic, marker|
      marker.lat clinic.latitude
      marker.lng clinic.longitude
      marker.infowindow clinic.description
    end
    @citys = City.all
  end

  def show_clinic
    @city = City.friendly.find(params[:city_id])
    @clinics = @city.clinics.friendly.find(params[:id])
    @hash = Gmaps4rails.build_markers(@clinics) do |clinic, marker|
      marker.lat clinic.latitude
      marker.lng clinic.longitude
      marker.infowindow clinic.description
    end
    @citys = City.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def load_city
      @city = City.friendly.find(params[:city_id])
    end
end
