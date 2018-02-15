class CreateSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :schedules do |t|
      t.integer :room_id, nil: false
      t.integer :user_id, nil: false
      t.date :date, nil: false
      t.integer :hour, nil: false

      t.timestamps
    end
  end
end
