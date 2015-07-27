Rails.application.routes.draw do

  get 'procedures/show'
  get 'news/show'

  root 'stati_pages#index'
  match '/about_us', to: 'stati_pages#about_us', via: 'get'
  match '/contacts', to: 'stati_pages#contacts', via: 'get'
  match '/faqs', to: 'stati_pages#faqs', via: 'get'
  match '/vacancies', to: 'stati_pages#vacancies', via: 'get'
  match '/news', to: 'news#index', via: 'get'
  match '/procedures', to: 'procedures#index', via: 'get'
end
