require 'spec_helper'

describe RegistrationsController do

  describe "GET 'sign_up_params'" do
    it "returns http success" do
      get 'sign_up_params'
      response.should be_success
    end
  end

  describe "GET 'account_update_params'" do
    it "returns http success" do
      get 'account_update_params'
      response.should be_success
    end
  end

end
