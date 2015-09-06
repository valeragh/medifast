class RenameServiceIdInRecord < ActiveRecord::Migration
  def change
    rename_column :records, :service_id, :service_category_id
  end
end
