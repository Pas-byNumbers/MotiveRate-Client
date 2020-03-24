# Rails.application.routes.draw do

#   scope '/api/v1' do
#     resources :users
#   end
# end

Rails.application.routes.draw do
  

  namespace :api do
    namespace :v1 do
      resources :users
      resources :goals
      resources :updates
      post "/login", to: "auth#create"
      get "/profile", to: "users#profile"
      patch "/increment-support/:id", to: "updates#increment_support"
    end
  end
end
