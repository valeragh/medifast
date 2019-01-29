# == Schema Information
#
# Table name: product_categories
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  slug       :string(255)
#  status     :string(255)
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  index_product_categories_on_slug  (slug) UNIQUE
#

class ProductCategory < ActiveRecord::Base
  has_many :products, :dependent => :destroy

  validates :name, presence: true
  STATUS_TYPES = [ "Скрыть", "Показать" ]

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
