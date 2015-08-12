class AddImageSmallUrlToServiceCategory < ActiveRecord::Migration
  def change
    add_column :service_categories, :image_small_url, :string
  end
end
