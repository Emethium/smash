class AddEquipmentsToCompany < ActiveRecord::Migration[5.1]
  def change
    add_reference :companies, :equipment, foreign_key: true
  end
end
