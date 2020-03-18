class Update < ApplicationRecord
  belongs_to :goal
  belongs_to :user
  after_initialize :set_defaults
  validates :text, presence: true

  def set_defaults
    self.supporters = 0
  end
end
