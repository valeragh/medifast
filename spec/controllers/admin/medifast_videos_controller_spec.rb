require 'rails_helper'

RSpec.describe Admin::MedifastVideosController, type: :controller do

  render_views
  let(:resource_class) { MedifastVideo }
  let(:all_resources)  { ActiveAdmin.application.namespaces[:admin].resources }
  let(:resource)       { all_resources[resource_class] }
  let(:page) { Capybara::Node::Simple.new(response.body) }

  let!(:medifast_video) { create(:medifast_video) }

  let(:valid_attributes) do
    FactoryGirl.attributes_for :medifast_video
  end

  let(:invalid_attributes) do
    { title: '' }
  end

  login_admin

  describe "GET index" do
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end
    it 'assigns the medifast_video' do
      get :index
      expect(assigns(:medifast_videos)).to include(medifast_video)
    end
    it "should render the expected columns" do
      get :index
      expect(page).to have_content(medifast_video.title)
      expect(page).to have_content(medifast_video.video_url)
    end
  end

  describe "GET new" do
    it 'returns http success' do
      get :new
      expect(response).to have_http_status(:success)
    end
    it 'assigns the medifast_video' do
      get :new
      expect(assigns(:medifast_video)).to be_a_new(MedifastVideo)
    end
    it "should render the form elements" do
      get :new
      expect(page).to have_field('Title')
      expect(page).to have_field('Description')
      expect(page).to have_field('Category')
      expect(page).to have_field('Video url')
    end
  end

  describe "POST create" do
    context "with valid params" do
      it "creates a new MedifastVideo" do
        expect {
          post :create, :medifast_video => valid_attributes
        }.to change(MedifastVideo, :count).by(1)
      end

      it "assigns a newly created medifast_video as @medifast_video" do
        post :create, :medifast_video => valid_attributes
        expect(assigns(:medifast_video)).to be_a(MedifastVideo)
        expect(assigns(:medifast_video)).to be_persisted
      end

      it "redirects to the created medifast_video" do
        post :create, :medifast_video => valid_attributes
        expect(response).to have_http_status(:redirect)
        expect(response).to redirect_to(admin_medifast_video_path(MedifastVideo.last))
      end

      it 'should create the medifast_video' do
        post :create, :medifast_video => valid_attributes
        medifast_video = MedifastVideo.last

        expect(medifast_video.title).to             eq(valid_attributes[:title])
        expect(medifast_video.category).to             eq(valid_attributes[:category])
        expect(medifast_video.video_url).to             eq(valid_attributes[:video_url])
        expect(medifast_video.description).to             eq(valid_attributes[:description])
      end
    end
    context "with invalid params" do
      it 'invalid_attributes return http success' do
        post :create, params: { medifast_video: invalid_attributes }
        expect(response).to have_http_status(:success)
      end

      it "assigns a newly created but unsaved medifast_video as @medifast_video" do
        post :create, params: { medifast_video: invalid_attributes }
        expect(assigns(:medifast_video)).to be_a_new(MedifastVideo)
      end

      it 'invalid_attributes do not create a MedifastVideo' do
        expect do
          post :create, params: { medifast_video: invalid_attributes }
        end.not_to change(MedifastVideo, :count)
      end
    end
  end

  describe "GET show" do
    it 'returns http success' do
      get :show, id: medifast_video
      expect(response).to have_http_status(:success)
    end
    it 'assigns the medifast_video' do
      get :show, id: medifast_video
      expect(assigns(:medifast_video)).to eq(medifast_video)
    end
    it "should render the form elements" do
      get :show, id: medifast_video
      expect(page).to have_content(medifast_video.description)
      expect(page).to have_content(medifast_video.title)
      expect(page).to have_content(medifast_video.video_url)
      expect(page).to have_content(medifast_video.category)
    end
  end

  describe "GET edit" do
    it 'returns http success' do
      get :edit, id: medifast_video
      expect(response).to have_http_status(:success)
    end
    it 'assigns the medifast_video' do
      get :edit, id: medifast_video
      expect(assigns(:medifast_video)).to eq(medifast_video)
    end
    it "should render the form elements" do
      get :edit, id: medifast_video
      expect(page).to have_field('Title')
      expect(page).to have_field('Description')
      expect(page).to have_field('Category')
      expect(page).to have_field('Video url')
    end
  end

  describe "PUT update" do
    context 'with valid params' do
      it 'assigns the medifast_video' do
        put :update, id: medifast_video, :medifast_video => valid_attributes
        expect(assigns(:medifast_video)).to eq(medifast_video)
      end
      it 'returns http redirect' do
        put :update, id: medifast_video, :medifast_video => valid_attributes
        expect(response).to have_http_status(:redirect)
        expect(response).to redirect_to(admin_medifast_video_path(medifast_video))
      end
      it "should update the medifast_video" do
        put :update, id: medifast_video, :medifast_video => valid_attributes
        medifast_video.reload
        expect(medifast_video.title).to             eq(valid_attributes[:title])
        expect(medifast_video.category).to             eq(valid_attributes[:category])
        expect(medifast_video.video_url).to             eq(valid_attributes[:video_url])
        expect(medifast_video.description).to             eq(valid_attributes[:description])
      end
    end
    context 'with invalid params' do
      it 'returns http success' do
        put :update, id: medifast_video, :medifast_video => invalid_attributes
        expect(response).to have_http_status(:success)
      end
      it 'does not change medifast_video' do
        expect do
          put :update, id: medifast_video, :medifast_video => invalid_attributes
        end.not_to change { medifast_video.reload.description }
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested select_option" do
      expect {
        delete :destroy, id: medifast_video.id
      }.to change(MedifastVideo, :count).by(-1)
    end

    it "redirects to the field" do
      delete :destroy, id: medifast_video.id
      expect(response).to redirect_to(admin_medifast_videos_path)
    end
  end
end