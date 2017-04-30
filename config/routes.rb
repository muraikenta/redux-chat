Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  namespace :api do
    get 'me', to: 'sessions#me'
    resources :users, only: [:index] do
      get :friends, on: :collection
    end

    resources :messages, only: [:index, :create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
