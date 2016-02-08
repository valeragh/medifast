Rails.application.routes.draw do

  resources :orders

  devise_for :users,
             controllers: { registrations: 'registrations', sessions: 'sessions' },
             path: '',
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'signup' }


  ActiveAdmin.routes(self)


  resources :line_items
  resources :carts
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
  match '/products', to: 'products#index', via: 'get'
  get '/products/:products_category_id', to: 'products#show', as: :product_category
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
  get 'sitemap' => 'stati_pages#sitemap'
  get '/robots.txt' => 'static_pages#robots'
  match '*path' => redirect('/'), via: :get

end
