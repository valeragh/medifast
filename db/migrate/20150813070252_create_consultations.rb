class CreateConsultations < ActiveRecord::Migration
  def change
    create_table :consultations do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.text :description
      t.integer :service_id
      t.datetime :checked_out_at

      t.timestamps
    end
  end
end
