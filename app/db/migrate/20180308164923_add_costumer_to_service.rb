class AddCostumerToService < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :costumer, :string
  end
end
