class AddRegisterCodeToCostumer < ActiveRecord::Migration[5.1]
  def change
    add_column :costumers, :register_code, :string
  end
end
