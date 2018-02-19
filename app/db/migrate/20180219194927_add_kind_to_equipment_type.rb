class AddKindToEquipmentType < ActiveRecord::Migration[5.1]
  def change
    add_column :equipment_types, :kind, :string
  end
end
