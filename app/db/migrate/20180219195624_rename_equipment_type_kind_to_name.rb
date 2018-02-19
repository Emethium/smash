class RenameEquipmentTypeKindToName < ActiveRecord::Migration[5.1]
  def change
    rename_column :equipment_types, :kind, :name
  end
end
