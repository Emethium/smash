class CreateEquipment < ActiveRecord::Migration[5.1]
  def change
    create_table :equipment do |t|
      t.string :type

      t.timestamps
    end
  end
end
