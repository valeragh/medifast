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

  resources :records
  resources :consultations
  resources :letters
  resources :answers

  root 'stati_pages#index'
  match '/about_us', to: 'stati_pages#about_us', via: 'get'
  match '/faqs', to: 'stati_pages#faqs', via: 'get'
  match '/vacansies', to: 'stati_pages#vacansies', via: 'get'
  match '/news', to: 'news#index', via: 'get'
  match '/news/stacionar', to: 'news#stacionar', via: 'get'
  match '/news/policlinica', to: 'news#policlinica', via: 'get'
  match '/news/filialy', to: 'news#filialy', via: 'get'
  match '/news/specialisty', to: 'news#specialisty', via: 'get'
  get '/news/:id', to: 'news#show', as: :show_news
  match '/procedures', to: 'procedures#index', via: 'get'
  get '/procedures/:service_category_id', to: 'procedures#show', as: :procedure_category
  get '/procedures/:service_category_id/service/:id', to: 'procedures#show_procedur', as: :procedure
  match '/personals', to: 'personals#index', via: 'get'
  match '/contacts', to: 'contacts#index', via: 'get'
  get '/contacts/:city_id', to: 'contacts#show', as: :contacts_city
  get '/contacts/:city_id/clinic/:id', to: 'contacts#show_clinic', as: :contacts_clinic

end
