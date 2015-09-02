class CreateServiceCategoriesClinics < ActiveRecord::Migration
  def change
    create_table :service_categories_clinics do |t|
      t.integer :service_category_id
      t.integer :clinic_id

      t.timestamps
    end
  end
end
