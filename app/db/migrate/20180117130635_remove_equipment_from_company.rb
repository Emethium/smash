class RemoveEquipmentFromCompany < ActiveRecord::Migration[5.1]
  def change
    remove_column :companies, :equipment_id, :string
  end
end
