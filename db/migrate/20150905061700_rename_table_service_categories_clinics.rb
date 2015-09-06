class RenameTableServiceCategoriesClinics < ActiveRecord::Migration
  def change
    rename_table :service_categories_clinics, :clinics_service_categories
  end
end
