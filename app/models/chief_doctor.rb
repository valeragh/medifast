# == Schema Information
#
# Table name: chief_doctors
#
#  id         :integer          not null, primary key
#  image      :string(255)
#  name       :string(255)
#  position   :string(255)
#  status     :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class ChiefDoctor < ActiveRecord::Base
  validates :name, :position, :status, :image, presence: true
  mount_uploader :image, ImageUploader
  STATUS_TYPES = [ "Показать", "Скрыть" ]
end
