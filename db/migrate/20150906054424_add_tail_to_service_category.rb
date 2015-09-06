class AddTailToServiceCategory < ActiveRecord::Migration
  def change
    add_column :service_categories, :tail, :integer
  end
end
