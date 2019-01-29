# == Schema Information
#
# Table name: sales
#
#  id          :integer          not null, primary key
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  rang        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Sale < ActiveRecord::Base
	mount_uploader :image_url, ImageUploader
	validates :name, :rang, :image_url, :description, presence: true

	RANG_TYPES = [ "Показать", "Скрыть" ]
end
