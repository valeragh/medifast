Rails.application.routes.draw do

  devise_for :personals,
             path: '',
             path_names: { sign_in: 'login_personal' }
  devise_for :users,
             controllers: { :omniauth_callbacks => 'users/omniauth_callbacks' },
             path: '',
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'signup' }


  ActiveAdmin.routes(self)

  get 'personals/show'
  get 'news/show'

  root 'stati_pages#index'
  match '/about_us', to: 'stati_pages#about_us', via: 'get'
  match '/contacts', to: 'stati_pages#contacts', via: 'get'
  match '/faqs', to: 'stati_pages#faqs', via: 'get'
  match '/vacancies', to: 'stati_pages#vacancies', via: 'get'
  match '/news', to: 'news#index', via: 'get'
  match '/news/show', to: 'news#show', via: 'get'
  match '/procedures', to: 'procedures#index', via: 'get'
  get '/procedures/:service_category_id', to: 'procedures#show', as: :procedure_category
  get '/procedures/:service_category_id/service/:id', to: 'procedures#show_procedur', as: :procedure
  match '/personals', to: 'personals#index', via: 'get'
end
