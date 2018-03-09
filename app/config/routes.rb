Rails.application.routes.draw do
  root to: 'pages#index'

  namespace 'api' do
    namespace 'v1' do
      get 'home', to: 'home#index'
      get 'costumers/search', to: 'costumers#search'
      get 'equipments/search', to: 'equipments#search'
      get 'services/search', to: 'services#search'
  		resources :companies
      resources :costumers
      resources :equipments
      resources :services
      resources :equipment_types
      resources :service_types
  	end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
