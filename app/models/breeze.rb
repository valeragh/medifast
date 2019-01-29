# == Schema Information
#
# Table name: breezes
#
#  id          :integer          not null, primary key
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  rang        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Breeze < ActiveRecord::Base
  validates :name, :rang, :image_url, :description, presence: true
  mount_uploader :image_url, ImageUploader

  RANG_TYPES = [ "Показать", "Скрыть" ]
end
