# == Schema Information
#
# Table name: vacancies
#
#  id          :integer          not null, primary key
#  description :text
#  name        :string(255)
#  status      :string(255)      default("Показать")
#  created_at  :datetime
#  updated_at  :datetime
#

class Vacancy < ActiveRecord::Base

  has_many :answers

  validates :name, :description, presence: true

  STATUS_TYPES = [ "Скрыть", "Показать" ]

end
