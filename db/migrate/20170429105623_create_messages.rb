class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :from_user_id
      t.integer :to_user_id
      t.string :body

      t.timestamps
    end

    add_index :messages, [:from_user_id, :to_user_id]
  end
end
