Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create] do
  	post :login, on: :collection
  	post :register, on: :collection
  	get :current, on: :collection
  end

  resources :rooms, only: [:index]
end
