class AddCheckedOutAtToAnswer < ActiveRecord::Migration
  def change
    add_column :answers, :checked_out_at, :datetime
  end
end
