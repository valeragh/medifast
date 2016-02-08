# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160208081832) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: true do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.integer  "author_id"
    t.string   "author_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "active_admin_comments", ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
  add_index "active_admin_comments", ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
  add_index "active_admin_comments", ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree

  create_table "advertisings", force: true do |t|
    t.string   "name"
    t.string   "image_url"
    t.text     "description"
    t.string   "rang"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "answers", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.text     "description"
    t.integer  "vacancy_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "checked_out_at"
    t.string   "file"
  end

  create_table "carts", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "certificates", force: true do |t|
    t.string   "doctor_id"
    t.string   "image_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "chief_doctors", force: true do |t|
    t.string   "name"
    t.string   "status"
    t.string   "position"
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "cities", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "slug"
    t.string   "image_url"
  end

  add_index "cities", ["slug"], name: "index_cities_on_slug", unique: true, using: :btree

  create_table "clinics", force: true do |t|
    t.integer  "city_id"
    t.string   "address"
    t.text     "contacts"
    t.float    "latitude"
    t.float    "longitude"
    t.text     "description"
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "slug"
    t.string   "rang"
  end

  add_index "clinics", ["slug"], name: "index_clinics_on_slug", unique: true, using: :btree

  create_table "clinics_service_categories", force: true do |t|
    t.integer  "service_category_id"
    t.integer  "clinic_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "consultations", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.text     "description"
    t.integer  "service_category_id"
    t.datetime "checked_out_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "conversations", force: true do |t|
    t.integer  "sender_id"
    t.integer  "recipient_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "conversations", ["recipient_id"], name: "index_conversations_on_recipient_id", using: :btree
  add_index "conversations", ["sender_id"], name: "index_conversations_on_sender_id", using: :btree

  create_table "doctors", force: true do |t|
    t.string   "name"
    t.string   "position"
    t.text     "description"
    t.integer  "clinic_id"
    t.string   "image_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "slug"
    t.integer  "tail"
    t.integer  "service_category_id"
  end

  add_index "doctors", ["slug"], name: "index_doctors_on_slug", unique: true, using: :btree

  create_table "letters", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.text     "description"
    t.datetime "checked_out_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "phone"
  end

  create_table "line_items", force: true do |t|
    t.integer  "product_id"
    t.integer  "cart_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "quantity",   default: 1
    t.integer  "order_id"
  end

  create_table "messages", force: true do |t|
    t.text     "body"
    t.integer  "conversation_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "messages", ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "orders", force: true do |t|
    t.string   "name"
    t.text     "address"
    t.string   "email"
    t.string   "pay_type"
    t.string   "shipping_type"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "checked_out_at"
  end

  create_table "personals", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.string   "clinic_id"
    t.text     "description"
    t.string   "image_url"
    t.string   "position"
  end

  add_index "personals", ["email"], name: "index_personals_on_email", unique: true, using: :btree
  add_index "personals", ["reset_password_token"], name: "index_personals_on_reset_password_token", unique: true, using: :btree

  create_table "pg_search_documents", force: true do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_id", "searchable_type"], name: "index_pg_search_documents_on_searchable_id_and_searchable_type", using: :btree

  create_table "pharmacies", force: true do |t|
    t.integer  "city_id"
    t.string   "address"
    t.text     "contacts"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "rang"
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.text     "title"
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_url"
    t.string   "slug"
  end

  add_index "posts", ["slug"], name: "index_posts_on_slug", unique: true, using: :btree

  create_table "product_categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "slug"
    t.string   "status"
  end

  add_index "product_categories", ["slug"], name: "index_product_categories_on_slug", unique: true, using: :btree

  create_table "products", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "image_url"
    t.decimal  "price",               precision: 8, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
    t.integer  "product_category_id"
  end

  create_table "records", force: true do |t|
    t.integer  "service_category_id"
    t.string   "name"
    t.string   "email"
    t.text     "description"
    t.integer  "clinic_id"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "checked_out_at"
  end

  add_index "records", ["checked_out_at"], name: "index_records_on_checked_out_at", using: :btree

  create_table "reviews", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sales", force: true do |t|
    t.string   "name"
    t.string   "image_url"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "rang"
  end

  create_table "service_categories", force: true do |t|
    t.string   "name"
    t.string   "image_url"
    t.string   "slug"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_small_url"
    t.string   "rang"
    t.integer  "tail"
    t.string   "video_url"
  end

  create_table "services", force: true do |t|
    t.string   "name"
    t.string   "image_url"
    t.string   "slug"
    t.text     "description"
    t.integer  "service_category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "rang"
    t.string   "image_one_url"
    t.string   "image_two_url"
    t.text     "description_two"
    t.string   "video_url"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "role"
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.integer  "clinic_id"
    t.text     "description"
    t.string   "image_url"
    t.string   "position"
    t.string   "rang"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "vacancies", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
