class RemoveCostumerIdFromService < ActiveRecord::Migration[5.1]
  def change
    remove_column :services, :costumer_id, :string
  end
end
