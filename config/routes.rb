Rails.application.routes.draw do

  devise_for :users,
             controllers: { registrations: 'registrations' },
             path: '',
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'signup' }


  ActiveAdmin.routes(self)


  resources :records
  resources :consultations
  resources :letters
  resources :answers
  resources :conversations do
    resources :messages
  end

  root 'stati_pages#index'
  match '/cabinet', to: 'users#index', via: 'get'
  match '/about_us', to: 'stati_pages#about_us', via: 'get'
  match '/search', to: 'stati_pages#search', via: 'get'
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
  match '/doctors', to: 'doctors#index', via: 'get'
  get '/doctors/clinic/:clinic_id', to: 'doctors#clinic', as: :doctors_clinic
  get '/doctors/:doctor_id', to: 'doctors#show', as: :show_doctors
  get '/modal/:modal' => 'stati_pages#index', as: :modal
  #match '*path' => redirect('/'), via: :get
  match '/contests', to: 'contests#index', via: 'get'
  resources 'surveys'
  resources 'attempts'

end
