# == Schema Information
#
# Table name: clinics_service_categories
#
#  id                  :integer          not null, primary key
#  created_at          :datetime
#  updated_at          :datetime
#  clinic_id           :integer
#  service_category_id :integer
#

class ClinicsServiceCategories < ActiveRecord::Base
  belongs_to :service_category
  belongs_to :clinic
end
