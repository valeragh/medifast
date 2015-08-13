class Vacancy < ActiveRecord::Base

  has_many :answers

  validates :name, :description, presence: true

end
