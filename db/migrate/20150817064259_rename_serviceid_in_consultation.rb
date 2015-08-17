class RenameServiceidInConsultation < ActiveRecord::Migration
  def change
  	rename_column :consultations, :service_id, :service_category_id
  end
end
