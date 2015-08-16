class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :position
      t.text :description
      t.integer :clinic_id
      t.string :image_url

      t.timestamps
    end
  end
end
