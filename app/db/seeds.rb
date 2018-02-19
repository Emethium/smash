# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do
    Company.create({
        name: Faker::Company.name,
        social_reason: Faker::Company.suffix,
        cnpj:  Faker::Company.duns_number,
        email: Faker::Internet.email,
        city: Faker::Address.city,
        state: Faker::Address.state
    })
end

25.times do
    Costumer.create({
        name: Faker::Company.name,
        email: Faker::Internet.email,
        kind: true,
        register_code:  Faker::Company.duns_number,
        social_reason: Faker::Company.suffix
    })
end

25.times do
    Costumer.create({
        name: Faker::Name.name,
        email: Faker::Internet.email,
        kind: false,
        register_code:  Faker::Company.duns_number
    })
end

25.times do
    Equipment.create({
        kind: Faker::Types.string,
        plate: Faker::Vehicle.vin,
        chassis: Faker::Vehicle.vin,
        control_number: Faker::Company.duns_number,
        proprietary: Faker::Company.name
    })
end

5.times do
    EquipmentType.create({
        kind: Faker::Types.string
    })
end

5.times do
    ServiceType.create({
        kind: Faker::Types.string
    })
end