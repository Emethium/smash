class RenameEquipmentTypeNameToKind < ActiveRecord::Migration[5.1]
  def change
    rename_column :equipment_types, :name, :kind
  end
end
