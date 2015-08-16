class AddRangToSale < ActiveRecord::Migration
  def change
    add_column :sales, :rang, :string
  end
end
