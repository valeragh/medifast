class AddProductCategotyIdToProduct < ActiveRecord::Migration
  def change
    add_column :products, :product_category_id, :integer
  end
end
