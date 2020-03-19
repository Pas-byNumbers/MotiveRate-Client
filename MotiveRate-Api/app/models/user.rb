class User < ApplicationRecord
  has_many :goals, dependent: :destroy
  has_many :updates, dependent: :destroy
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  validates :email, uniqueness: true
end
