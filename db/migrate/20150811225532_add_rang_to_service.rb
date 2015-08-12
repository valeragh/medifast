class AddRangToService < ActiveRecord::Migration
  def change
    add_column :services, :rang, :string
  end
end
