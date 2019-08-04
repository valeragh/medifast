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
	validates :video_url, :title, presence: true

	tandem_category = Product.pluck(:title)
  static_category = ["Информация", "Контакты", "Отзывы"]
  CATEGORY_TYPES = tandem_category + static_category
end
