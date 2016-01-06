class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.text :fun_fact
      t.string :hometown

      t.timestamps null: true
    end
  end
end
