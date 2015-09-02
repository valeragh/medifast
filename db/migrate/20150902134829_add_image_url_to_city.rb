class AddImageUrlToCity < ActiveRecord::Migration
  def change
    add_column :cities, :image_url, :string
  end
end
