class AddKindToCustomer < ActiveRecord::Migration[5.1]
  def change
    add_column :costumers, :kind, :bool
  end
end
