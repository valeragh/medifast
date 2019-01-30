class CreateDoctorClinics < ActiveRecord::Migration
  def change
    create_table :doctor_clinics do |t|
      t.integer :doctor_id
      t.integer :clinic_id

      t.timestamps
    end
    add_index :doctor_clinics, :doctor_id
    add_index :doctor_clinics, :clinic_id
  end
end
