class RenameAdvertisingToBreeze < ActiveRecord::Migration
  def self.up
    rename_table :advertisings, :breezes
  end
  def self.down
    rename_table :breezes, :advertisings
  end
end
