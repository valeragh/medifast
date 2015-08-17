class RenameClinicInPersonal < ActiveRecord::Migration
  def change
  	rename_column :personals, :clinic, :clinic_id
  end
end
