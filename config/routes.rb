Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  namespace :api do
    resources :users, only: [:index] do
      get :friends, on: :collection
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
