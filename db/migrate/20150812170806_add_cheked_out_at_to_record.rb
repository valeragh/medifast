class AddChekedOutAtToRecord < ActiveRecord::Migration
  def change
    add_column :records, :checked_out_at, :datetime
    add_index :records, :checked_out_at
  end
end
