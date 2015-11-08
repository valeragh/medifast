class PersonalsController < ApplicationController
  def index
    @personals = User.where('(role = ? AND rang = ? AND id != ?)', 'doctor', 'Показать', current_user.id)
  end
end
