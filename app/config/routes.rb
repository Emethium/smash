Rails.application.routes.draw do
  root to: 'pages#index'
  get 'pages/index'

  get 'companies',  to: 'companies#index'
  get 'costumers',  to: 'costumers#index'
  get 'equipments', to: 'equipments#index'
  get 'services',   to: 'services#index'

  resources :companies
  resources :costumers
  resources :equipments
  resources :services

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
