class Service < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:name, :description, :description_two]
  belongs_to :service_category

  mount_uploader :image_url, ImageUploader
  mount_uploader :image_one_url, ImageUploader
  mount_uploader :image_two_url, ImageUploader

  validates :name, :rang, :image_url, :description, :service_category_id, presence: true
  validates :name, length: {
    minimum: 2,
    maximum: 50,
    too_short: "должен содержать не менее %{count} символа",
    too_long: "должен содержать не более %{count} символов"
  }


  RANG_TYPES = [ "Высокий", "Средний", "Низкий" ]

  after_commit  :update_sitemap

  def update_sitemap
    system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:generate")
    #system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:symlink")
  end

  def self.order_by_case
    ret = "CASE"
    RANG_TYPES.each_with_index do |p, i|
      ret << " WHEN rang = '#{p}' THEN #{i}"
    end
    ret << " END"
  end

  scope :order_by_priority, -> {order(order_by_case)}

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end
end
