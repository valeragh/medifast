class AddRangToUser < ActiveRecord::Migration
  def change
    add_column :users, :rang, :string
  end
end
