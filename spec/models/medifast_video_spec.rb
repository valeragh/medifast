# == Schema Information
#
# Table name: medifast_videos
#
#  id          :integer          not null, primary key
#  category    :string(255)
#  description :text
#  title       :string(255)
#  medifast_video_url   :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  medifast_video_id    :string(255)
#

require 'rails_helper'

describe MedifastVideo do
  it 'is invalite without a factory medifast_video_url' do
    medifast_video = build(:medifast_video, video_url: nil)
    medifast_video.valid?
    expect(medifast_video.errors[:video_url]).to include("не может быть пустым")
  end

  it 'is invalite without a factory title' do
    medifast_video = build(:medifast_video, title: nil)
    medifast_video.valid?
    expect(medifast_video.errors[:title]).to include("не может быть пустым")
  end

  it 'has a valid factory' do
    expect(build(:medifast_video)).to be_valid
  end
end
