class AddRangToClinic < ActiveRecord::Migration
  def change
    add_column :clinics, :rang, :string
  end
end
