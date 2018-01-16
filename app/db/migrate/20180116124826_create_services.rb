class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :name
      t.references :equipment, foreign_key: true
      t.references :company, foreign_key: true
      t.references :costumer, foreign_key: true
      t.date :done_at
      t.date :next_service

      t.timestamps
    end
  end
end
