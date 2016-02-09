class AddDescriptionToPharmacy < ActiveRecord::Migration
  def change
    add_column :pharmacies, :description, :text
  end
end
