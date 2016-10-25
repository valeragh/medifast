class Vacancy < ActiveRecord::Base

  has_many :answers

  validates :name, :description, presence: true

  STATUS_TYPES = [ "Скрыть", "Показать" ]

end
