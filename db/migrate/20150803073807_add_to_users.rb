class AddToUsers < ActiveRecord::Migration
  def change
    add_column :users, :role, :string
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_column :users, :name, :string

    User.create! do |u|
        u.email     = 'admin@admin.com'
        u.name     = 'admin'
        u.password    = 'adminadmin'
        u.role = 'admin'
    end

  end
end
