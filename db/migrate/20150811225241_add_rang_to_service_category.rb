class AddRangToServiceCategory < ActiveRecord::Migration
  def change
    add_column :service_categories, :rang, :string
  end
end
