class MedifastVideosController < ApplicationController
  def index
  	@medifast_videos = MedifastVideo.all
  end
end
