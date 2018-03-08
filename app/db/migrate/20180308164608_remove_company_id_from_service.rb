class RemoveCompanyIdFromService < ActiveRecord::Migration[5.1]
  def change
    remove_column :services, :company_id, :string
  end
end
