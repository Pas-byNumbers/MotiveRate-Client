# Rails.application.routes.draw do
#   scope '/api/v1' do
#     resources :users
#   end
# end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end
