class Goal < ApplicationRecord
  belongs_to :user
  after_initialize :set_defaults

  def set_defaults
    self.completed = false
  end
end
