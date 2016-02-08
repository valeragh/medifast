class AddStatusToProductCategory < ActiveRecord::Migration
  def change
    add_column :product_categories, :status, :string
  end
end
