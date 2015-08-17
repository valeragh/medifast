class AddImageOneToService < ActiveRecord::Migration
  def change
    add_column :services, :image_one_url, :string
    add_column :services, :image_two_url, :string
    add_column :services, :description_two, :string
  end
end
