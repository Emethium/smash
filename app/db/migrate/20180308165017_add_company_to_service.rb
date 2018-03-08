class AddCompanyToService < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :company, :string
  end
end
