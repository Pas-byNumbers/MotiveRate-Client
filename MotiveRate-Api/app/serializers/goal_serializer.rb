class GoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :category, :user_id, :deadline, :completed, :archived, :created_at
end
