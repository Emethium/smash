class AddSocialReasonToCostumer < ActiveRecord::Migration[5.1]
  def change
    add_column :costumers, :social_reason, :string
  end
end
