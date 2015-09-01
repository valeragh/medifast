class PersonalsController < ApplicationController
  def index
    @personals = User.where("role = 'doctor'")
  end
end
