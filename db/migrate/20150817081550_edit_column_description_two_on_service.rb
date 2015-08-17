class EditColumnDescriptionTwoOnService < ActiveRecord::Migration
    def up
      change_column :services, :description_two, :text
	end
	def down
      change_column :services, :description_two, :string
	end
end
