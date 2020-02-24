class User < ApplicationRecord
  has_many :goals
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  validates :email, uniqueness: true
end
