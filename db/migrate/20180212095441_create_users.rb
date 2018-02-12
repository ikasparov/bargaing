class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
    	t.string :name, nil: false
    	t.string :email, nil: false, index: true
    	t.string :auth_token

      t.timestamps
    end
  end
end
