class Vacancy < ActiveRecord::Base

  validates :name, :description, presence: true

end
