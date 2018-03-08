class RemoveEquipmentIdFromService < ActiveRecord::Migration[5.1]
  def change
    remove_column :services, :equipment_id, :string
  end
end
