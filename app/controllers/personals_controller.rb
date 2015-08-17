class PersonalsController < ApplicationController
  def index
    @personals = Personal.all.order(name: :desc)
  end
end
