class PersonalsController < ApplicationController
  def index
    @personals = Personal.all.order(clinic: :desc)
  end

  def show
  end
end
