class AddImageToUser < ActiveRecord::Migration
  def change
    add_column :users, :clinic_id, :integer
    add_column :users, :description, :text
    add_column :users, :image_url, :string
    add_column :users, :position, :string
  end
end
