class RemoveTypeFromCostumer < ActiveRecord::Migration[5.1]
  def change
    remove_column :costumers, :type, :string
  end
end
