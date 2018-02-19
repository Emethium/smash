class AddKindToServiceType < ActiveRecord::Migration[5.1]
  def change
    add_column :service_types, :kind, :string
  end
end
