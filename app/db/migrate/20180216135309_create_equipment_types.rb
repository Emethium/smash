class CreateEquipmentTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :equipment_types do |t|
      t.string :type

      t.timestamps
    end
  end
end
