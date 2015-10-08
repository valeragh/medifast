class AddVideoUrlToServiceCategory < ActiveRecord::Migration
  def change
    add_column :service_categories, :video_url, :string
  end
end
