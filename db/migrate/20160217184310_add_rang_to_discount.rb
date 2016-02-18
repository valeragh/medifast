class AddRangToDiscount < ActiveRecord::Migration
  def change
    add_column :discounts, :tail, :integer
  end
end
