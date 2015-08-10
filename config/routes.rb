Rails.application.routes.draw do

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
  match '/procedures/show', to: 'procedures#show', via: 'get'
  match '/procedures/show_procedur', to: 'procedures#show_procedur', via: 'get'
  match '/personals', to: 'personals#index', via: 'get'
end
