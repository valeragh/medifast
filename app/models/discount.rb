# == Schema Information
#
# Table name: discounts
#
#  id          :integer          not null, primary key
#  description :text
#  image_url   :string(255)
#  name        :string(255)
#  status      :string(255)
#  tail        :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Discount < ActiveRecord::Base
  mount_uploader :image_url, ImageUploader
  validates :name, :status, :image_url, :description, presence: true

  STATUS_TYPES = [ "Показать", "Скрыть" ]
end
