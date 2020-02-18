# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'bcrypt'


User.create([
  {
    username: "Mangamojo",
    password_digest: BCrypt::Password.create("dfhosdkbnnkdshf"),
    email: "mangamojo@example.com",
    first_name: "Kojo",
    last_name: "Mangeka",
    score: 30,
    tier: "wanderer"
  },
  {
    username: "culinature",
    password_digest: BCrypt::Password.create("gsoghekdogdjs"),
    email: "culinature@email.com",
    first_name: "Colin",
    last_name: "Vice",
    score: 1200,
    tier: "explorer"
  },
  {
    username: "Miasma",
    password_digest: BCrypt::Password.create("halhjdnfkbnd"),
    email: "djmiasma@registerme.com",
    first_name: "Melanie",
    last_name: "Sevina",
    score: 20030,
    tier: "champion"
  },
  {
    username: "NorthernLight",
    password_digest: BCrypt::Password.create("lhpdpisidngirsd"),
    email: "northstar.media@mailbox.com",
    first_name: "Aurora",
    last_name: "Hadilla",
    score: 7590,
    tier: "pioneer"
  },
  {
    username: "inFinityAdVenturer",
    password_digest: BCrypt::Password.create("dsgodsogg"),
    email: "infinityman@email.com",
    first_name: "Finn",
    last_name: "Venseris",
    score: 3845,
    tier: "visionary"
  },
  {
    username: "wordsofkim",
    password_digest: BCrypt::Password.create("oboobofdkfksdg"),
    email: "kimgaveens@example.com",
    first_name: "Kim",
    last_name: "Gaveen",
    score: 1830,
    tier: "explorer"
  },
  {
    username: "AzirInn",
    password_digest: BCrypt::Password.create("hfodjsfhenfk"),
    email: "azirdivi@mailbox.com",
    first_name: "Azir",
    last_name: "Shardivi",
    score: 60320,
    tier: "master"
  },
  {
    username: "MartialSoul",
    password_digest: BCrypt::Password.create("gjdgpaogofod"),
    email: "martialsoul@example.com",
    first_name: "Lucaro",
    last_name: "Mangeka",
    score: 4635,
    tier: "visionary"
  },
  {
    username: "WyvernTech",
    password_digest: BCrypt::Password.create("dsfdghoofoofpd"),
    email: "wyverntech@business.com",
    first_name: "Drake",
    last_name: "Altaroth",
    score: 107920,
    tier: "grandmaster"
  },
  {
    username: "Serenathena",
    password_digest: BCrypt::Password.create("hofpdkbmdmmf"),
    email: "serenathena@esports.com",
    first_name: "Serena",
    last_name: "Losanna",
    score: 32370,
    tier: "sage"
  }
])

puts "Seed Data has been uploaded to DB"