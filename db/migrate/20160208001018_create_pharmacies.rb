class CreatePharmacies < ActiveRecord::Migration
  def change
    create_table :pharmacies do |t|
      t.integer :city_id
      t.string :address
      t.text :contacts
      t.float :latitude
      t.float :longitude
      t.string :rang
      t.string :title

      t.timestamps
    end
  end
end
