class AddActivatedToEquipment < ActiveRecord::Migration[5.1]
  def change
    add_column :equipment, :activated, :boolean
  end
end
