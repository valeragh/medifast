class CreateVideos < ActiveRecord::Migration
  def change
    create_table :medifast_videos do |t|
      t.string :video_url
      t.string :title
      t.text :description
      t.string :category
      t.string :video_id

      t.timestamps
    end
  end
end
