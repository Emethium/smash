class AddCityAndStateToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :city, :string
    add_column :companies, :state, :string
  end
end
