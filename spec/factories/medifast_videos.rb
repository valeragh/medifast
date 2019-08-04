# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  category    :string(255)
#  description :text
#  title       :string(255)
#  video_url   :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  video_id    :string(255)
#

FactoryGirl.define do
  factory :medifast_video do
    title "MyString"
    video_url "MyString"
    video_id "MyString"
    category "MyString"
    description "MyText"
  end
end
