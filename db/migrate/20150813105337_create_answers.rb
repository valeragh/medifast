class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.text :description
      t.integer :vacancy_id

      t.timestamps
    end
  end
end
