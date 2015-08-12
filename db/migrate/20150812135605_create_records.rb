class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.integer :service_id
      t.string :name
      t.string :email
      t.text :description
      t.integer :clinic_id
      t.string :phone

      t.timestamps
    end
  end
end
