class AddPlateToEquipment < ActiveRecord::Migration[5.1]
  def change
    add_column :equipment, :plate, :string
  end
end
