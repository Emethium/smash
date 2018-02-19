class AddKindToEquipment < ActiveRecord::Migration[5.1]
  def change
    add_column :equipment, :kind, :string
  end
end
