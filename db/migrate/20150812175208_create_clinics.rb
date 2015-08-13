class CreateClinics < ActiveRecord::Migration
  def change
    create_table :clinics do |t|
      t.integer :city_id
      t.string :address
      t.text :contacts
      t.float :latitude
      t.float :longitude
      t.text :description
      t.string :title

      t.timestamps
    end
  end
end
