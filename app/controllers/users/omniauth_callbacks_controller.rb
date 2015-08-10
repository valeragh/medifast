class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.find_for_facebook_oauth request.env['omniauth.auth']
    if @user.persisted?
      sign_in_and_redirect :user, @user
    else
      flash[:alert] = 'Authentication error'
      redirect_to root_path
    end
  end

  def vkontakte
    @user = User.find_for_vkontakte_oauth request.env['omniauth.auth']
    if @user.persisted?
      sign_in_and_redirect :user, @user
    else
      flash[:alert] = 'Authentication error'
      redirect_to root_path
    end
  end
end