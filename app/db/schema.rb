# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180117135646) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "social_reason"
    t.string "cnpj"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "costumers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "kind"
    t.string "register_code"
  end

  create_table "equipment", force: :cascade do |t|
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "plate"
  end

  create_table "services", force: :cascade do |t|
    t.string "name"
    t.bigint "equipment_id"
    t.bigint "company_id"
    t.bigint "costumer_id"
    t.date "done_at"
    t.date "next_service"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "cost"
    t.index ["company_id"], name: "index_services_on_company_id"
    t.index ["costumer_id"], name: "index_services_on_costumer_id"
    t.index ["equipment_id"], name: "index_services_on_equipment_id"
  end

  add_foreign_key "services", "companies"
  add_foreign_key "services", "costumers"
  add_foreign_key "services", "equipment"
end
