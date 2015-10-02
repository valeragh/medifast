class AddPhoneToLetter < ActiveRecord::Migration
  def change
    add_column :letters, :phone, :string
  end
end
