# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  category    :string(255)
#  description :text
#  title       :string(255)
#  video_url   :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  video_id    :string(255)
#

class MedifastVideo < ActiveRecord::Base
	validates :video_url, :category, :description, :title, presence: true

	service_categories = ServiceCategory.pluck(:name)
  static_category = ["Информация", "Контакты", "Отзывы"]
  CATEGORY_TYPES = service_categories + static_category
end
