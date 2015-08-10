class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale


  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def authenticate_active_admin_user!
    authenticate_user!
    unless current_user.role?(:admin)
      flash[:alert] = "У Вас нет прав доступа к этому ресурсу, авторизируйтесь пожалуйста"
      redirect_to root_path
    end
  end

end
