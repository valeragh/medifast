class ClinicsServiceCategories < ActiveRecord::Base
  belongs_to :service_category
  belongs_to :clinic
end
