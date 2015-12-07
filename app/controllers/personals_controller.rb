class PersonalsController < ApplicationController
  def index
    @personals = User.where('(role = ? AND rang = ? )', 'doctor', 'Показать')
    @clinics_show = Clinic.where("rang = 'Показать'")
  end
end
