# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# A mock dataset to create users with.
users =[
    {
        email: "test@test.com",
        password: "testpw",
        password_confirmation: "testpw"
    },
    {
        email: "trial@test.com",
        password: "trialpw",
        password_confirmation: "trialpw"
    },
    {
        email: "exam@test.com",
        password: "exampw",
        password_confirmation: "exampw"
    },
    {
        email: "assessment@test.com",
        password: "assessmentpw",
        password_confirmation: "assessmentpw"
    }
]
# creates a User object for each element in the json array above.
users.each do |attribute|
    User.create attribute
    puts "creating user #{attribute}"
end


# 1 THIS IS WHERE THE INFO IN THE DATABASE CAME FROM

apartments =[
    {
        street: "123 ABC St",
        city: "San Diego",
        state: "CA",
        manager: "Jim",
        email: "Jim@test.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes"
    },
    {
        street: "221B Baker St",
        city: "London",
        state: "UK",
        manager: "Ms. Hudson",
        email: "ms-hud@uk.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no"
    },
    {
        street: "742 Evergreen Terrace",
        city: "Springfield",
        state: "Anystate",
        manager: "Homer",
        email: "hs@dounut.com",
        price: "500",
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes"
    },
    {
        street: "1640 Riverside Drive",
        city: "Hill Valley",
        state: "California",
        manager: "Emmet Brown",
        email: "julesfan@2015.com",
        price: "2000",
        bedrooms: 6,
        bathrooms: 4,
        pets: "yes"
    }
]

# We are creating a variable that holds a test user from our array above and we use it to test if we can create an apartment associated to that user using the code block below

test_user = User.first

apartments.each do |attribute|
    test_user.apartments.create attribute
end