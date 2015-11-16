class PersonalsController < ApplicationController
  def index
    @personals = User.where('(role = ? AND rang = ? )', 'doctor', 'Показать')
  end
end
