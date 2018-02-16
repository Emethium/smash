class AddChassisAndControlNumberAndProprietaryToEquipment < ActiveRecord::Migration[5.1]
  def change
    add_column :equipment, :chassis, :string
    add_column :equipment, :control_number, :string
    add_column :equipment, :proprietary, :string
  end
end
