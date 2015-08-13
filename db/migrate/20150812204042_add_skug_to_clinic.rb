class AddSkugToClinic < ActiveRecord::Migration
  def change
    add_column :clinics, :slug, :string
    add_index :clinics, :slug, unique: true
  end
end
