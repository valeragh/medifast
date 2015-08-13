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

  resources :records
  resources :consultations
  resources :letters
  resources :answers

  root 'stati_pages#index'
  match '/about_us', to: 'stati_pages#about_us', via: 'get'
  match '/faqs', to: 'stati_pages#faqs', via: 'get'
  match '/vacansies', to: 'stati_pages#vacansies', via: 'get'
  match '/news', to: 'news#index', via: 'get'
  match '/news/show', to: 'news#show', via: 'get'
  match '/procedures', to: 'procedures#index', via: 'get'
  get '/procedures/:service_category_id', to: 'procedures#show', as: :procedure_category
  get '/procedures/:service_category_id/service/:id', to: 'procedures#show_procedur', as: :procedure
  match '/personals', to: 'personals#index', via: 'get'
  match '/contacts', to: 'contacts#index', via: 'get'
  get '/contacts/:city_id', to: 'contacts#show', as: :contacts_city
  get '/contacts/:city_id/clinic/:id', to: 'contacts#show_clinic', as: :contacts_clinic

end
