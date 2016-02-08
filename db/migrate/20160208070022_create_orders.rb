class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :name
      t.text :address
      t.string :email
      t.string :pay_type
      t.string :shipping_type
      t.string :phone

      t.timestamps
    end
  end
end
