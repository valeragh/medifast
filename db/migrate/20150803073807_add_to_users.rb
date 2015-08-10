class AddToUsers < ActiveRecord::Migration
  def change
    add_column :users, :role, :string

    User.create! do |u|
        u.email     = 'admin@admin.com'
        u.password    = 'adminadmin'
        u.role = 'admin'
    end

  end
end
