Rails.application.routes.draw do

  root 'stati_pages#index'
  match '/about_us', to: 'stati_pages#about_us', via: 'get'
  match '/contacts', to: 'stati_pages#contacts', via: 'get'
  match '/faqs', to: 'stati_pages#faqs', via: 'get'
  match '/vacancies', to: 'stati_pages#vacancies', via: 'get'
end
