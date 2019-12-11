# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'bcrypt'


users = User.create([
  {
    username: "Mangamojo",
    password_digest: "dfhosdihoidshf",
    email: "mangamojo@example.com",
    first_name: "Kojo",
    last_name: "Mangeka",
    score: 30,
    tier: "fresh"
  }
])