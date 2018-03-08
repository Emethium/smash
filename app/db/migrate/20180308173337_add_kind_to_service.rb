class AddKindToService < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :kind, :string
  end
end
