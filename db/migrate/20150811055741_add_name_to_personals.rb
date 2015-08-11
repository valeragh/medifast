class AddNameToPersonals < ActiveRecord::Migration
  def change
    add_column :personals, :name, :string
    add_column :personals, :clinic, :string
    add_column :personals, :description, :text
    add_column :personals, :image_url, :string
  end
end
