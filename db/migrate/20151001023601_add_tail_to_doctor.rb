class AddTailToDoctor < ActiveRecord::Migration
  def change
    add_column :doctors, :tail, :integer
  end
end
