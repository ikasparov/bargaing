# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create name: 'Test User 1', email: 'e1@mail.example'
User.create name: 'Test User 2', email: 'e2@mail.example'
User.create name: 'Test User 3', email: 'e3@mail.example'

['Green', 'Blue', 'Red', 'Orange'].each do |name|
  Room.create(name: "#{name} room")
end

2000.times do |i|
  sch = Schedule.new room: Room.all.sample, user: User.all.sample, hour: (10..19).to_a.sample, date: Date.current, date: (20.days.ago.to_date..20.days.from_now.to_date).to_a.sample
  puts "#{sch.save} - #{sch.room_id} - #{sch.date} - #{sch.hour}"
end