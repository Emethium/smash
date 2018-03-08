class AddEquipmentToService < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :equipment, :string
  end
end
