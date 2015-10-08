class AddVideoUrlToService < ActiveRecord::Migration
  def change
    add_column :services, :video_url, :string
  end
end
