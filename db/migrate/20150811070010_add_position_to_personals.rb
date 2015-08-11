class AddPositionToPersonals < ActiveRecord::Migration
  def change
    add_column :personals, :position, :string
  end
end
