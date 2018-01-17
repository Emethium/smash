class AddTypeToCostumer < ActiveRecord::Migration[5.1]
  def change
    add_column :costumers, :type, :string
  end
end
