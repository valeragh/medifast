# == Schema Information
#
# Table name: doctors
#
#  id                  :integer          not null, primary key
#  description         :text
#  image_url           :string(255)
#  name                :string(255)
#  position            :string(255)
#  slug                :string(255)
#  tail                :integer
#  created_at          :datetime
#  updated_at          :datetime
#  clinic_id           :integer
#  service_category_id :integer
#
# Indexes
#
#  index_doctors_on_slug  (slug) UNIQUE
#

class Doctor < ActiveRecord::Base
	include PgSearch
  multisearchable :against => [:name, :description]
  belongs_to :service_category
  has_many :doctor_clinics, dependent: :destroy
  has_many :clinics, through: :doctor_clinics
  has_many :certificate, :dependent => :destroy
  accepts_nested_attributes_for :clinics
  accepts_nested_attributes_for :doctor_clinics
	mount_uploader :image_url, ImageUploader

	validates :name, :position, :image_url, :description, :tail, :service_category_id, presence: true

  after_commit  :update_sitemap
  after_save :reindex

  def update_sitemap
    system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:generate")
    #system("RAILS_ENV=#{Rails.env} bundle exec rake sitemap:symlink")
  end

  extend FriendlyId
  friendly_id :name, use: :slugged

  def should_generate_new_friendly_id?
    new_record?
  end

  private

  def reindex
    PgSearch::Multisearch.rebuild(Doctor)
  end
end
