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
