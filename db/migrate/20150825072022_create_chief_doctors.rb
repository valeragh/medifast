class CreateChiefDoctors < ActiveRecord::Migration
  def change
    create_table :chief_doctors do |t|
      t.string :name
      t.string :status
      t.string :position
      t.string :image

      t.timestamps
    end
  end
end
