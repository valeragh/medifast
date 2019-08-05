require 'rails_helper'

RSpec.describe MedifastVideosController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
      expect(response.body).to eq ""
    end

    it "assigns the requested videos to @videos" do
      medifast_videos = [create(:medifast_video)]
      get :index
      expect(assigns(:medifast_videos)).to eq(medifast_videos)
    end
  end

end
