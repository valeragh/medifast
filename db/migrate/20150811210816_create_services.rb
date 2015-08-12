class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :name
      t.string :image_url
      t.string :slug
      t.text :description
      t.integer :service_category_id

      t.timestamps
    end
  end
end
