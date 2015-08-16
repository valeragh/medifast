class CreateCertificates < ActiveRecord::Migration
  def change
    create_table :certificates do |t|
      t.string :doctor_id
      t.string :image_url

      t.timestamps
    end
  end
end
