class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :event
      t.datetime :slot

      t.timestamps
    end
  end
end
