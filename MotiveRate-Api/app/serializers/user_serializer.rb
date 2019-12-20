class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :score, :tier

  attribute :full_name do |object|
    "#{object.first_name} #{object.last_name}"
  end
end
