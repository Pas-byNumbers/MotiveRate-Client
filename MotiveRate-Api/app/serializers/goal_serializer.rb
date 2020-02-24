class GoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :category, :created_at, :deadline, :completed
end
