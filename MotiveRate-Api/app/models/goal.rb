class Goal < ApplicationRecord
  belongs_to :user
  has_many :updates, dependent: :destroy
  after_initialize :set_defaults
  validates :title, presence: true

  def set_defaults
    # self.completed = false
    # self.archived = false
  end
end
