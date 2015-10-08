class AddServiceCategoryIdToDoctor < ActiveRecord::Migration
  def change
    add_column :doctors, :service_category_id, :integer
  end
end
