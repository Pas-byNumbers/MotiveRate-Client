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

Goal.create([
  {
    title: "First Comic Book",
    description: "I'm going to make a short sci-fi adventure",
    category: "Arts",
    deadline: "20-09-2020",
    user_id: 1
  },
  {
    title: "Design a new dessert setlist",
    description: "5 to 7 desserts covering some of the most famous exotic aftermeal choices",
    category: "Food",
    deadline: "05-10-2020",
    user_id: 2
  },
  {
    title: "First DJing Podcast",
    description: "Make a podcast about approaching a mix",
    category: "Music",
    deadline: "17-06-2020",
    user_id: 3
  },
  {
    title: "Write a script for modern western parody",
    description: "Satire and violent western characters trapped in a modern age",
    category: "Arts",
    deadline: "20-09-2020",
    user_id: 4
  },
  {
    title: "Plan a trip to South America for late 2020",
    description: "Visit 8 major regions",
    category: "Travel",
    deadline: "29-11-2020",
    user_id: 5
  },
  {
    title: "Plan a new horror fantasy trilogy",
    description: "Detailed brainstorm and breakdown of story elements",
    category: "Literature",
    deadline: "20-09-2020",
    user_id: 6
  },
  {
    title: "Basic housing portfolio",
    description: "Find your first few properties to invest in and develop",
    category: "Property",
    deadline: "08-07-2021",
    user_id: 7
  },
  {
    title: "Find a new martial art to learn",
    description: "My second martial art should be a standing street defense style to complement BJJ",
    category: "Sports",
    deadline: "10-05-2020",
    user_id: 8
  },
  {
    title: "Learn networking basics",
    description: "Need to understand how network connections operate first before learning how to secure them",
    category: "Technology",
    deadline: "06-08-2020",
    user_id: 9
  },
  {
    title: "Start gaming news channel on youtube",
    description: "I'm gaining popularity among the gaming community, they've been asking me to start a livestream",
    category: "Entertainment",
    deadline: "11-04-2020",
    user_id: 10
  }
])

Update.create([
  {
    text: "Created a sample storyboard with two protagonists",
    user_id: 1,
    goal_id: 1
  },
  {
    text: "Made a baked alaska and decided to make it the first menu item",
    user_id: 2,
    goal_id: 2
  },
  {
    text: "Bought livesteam kit, 4 cameras and streaming console",
    user_id: 3,
    goal_id: 3
  },
  {
    text: "Drafted character tropes and potential cast",
    user_id: 4,
    goal_id: 4
  },
  {
    text: "Decided on Argentina and Peru as first two countries to visit",
    user_id: 5,
    goal_id: 5
  },
  {
    text: "Designed the map for the world setting of the whole trilogy",
    user_id: 6,
    goal_id: 6
  },
  {
    text: "Found 2 large mainsonettes that could be used for student housing",
    user_id: 7,
    goal_id: 7
  },
  {
    text: "Went to a trial class that covered Muay Thai - Loved it!",
    user_id: 8,
    goal_id: 8
  },
  {
    text: "Learned about server requests and responses",
    user_id: 9,
    goal_id: 9
  },
  {
    text: "Found 5 AAA games that would make great first reviews",
    user_id: 10,
    goal_id: 10
  }
])

puts "Seed Data has been uploaded to DB"