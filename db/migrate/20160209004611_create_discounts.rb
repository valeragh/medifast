class CreateDiscounts < ActiveRecord::Migration
  def change
    create_table :discounts do |t|
      t.string :name
      t.text :description
      t.string :status
      t.string :image_url

      t.timestamps
    end
  end
end
