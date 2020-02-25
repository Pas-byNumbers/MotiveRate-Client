class GoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :category, :user_id, :created_at, :deadline, :completed
end
