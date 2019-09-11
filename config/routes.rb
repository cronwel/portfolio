Rails.application.routes.draw do
  get 'main/home'
  get 'main/about'
  get 'main/contact'
  get 'main/projects'
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
