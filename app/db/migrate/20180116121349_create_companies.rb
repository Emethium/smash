class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :social_reason
      t.string :cnpj
      t.string :email

      t.timestamps
    end
  end
end
