class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name, unique: true
    end
  end
end
