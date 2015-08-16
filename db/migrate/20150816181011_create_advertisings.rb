class CreateAdvertisings < ActiveRecord::Migration
  def change
    create_table :advertisings do |t|
      t.string :name
      t.string :image_url
      t.text :description
      t.string :rang

      t.timestamps
    end
  end
end
