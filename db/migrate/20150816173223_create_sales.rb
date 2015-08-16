class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.string :name
      t.string :image_url
      t.text :description

      t.timestamps
    end
  end
end
