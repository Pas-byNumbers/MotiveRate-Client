class UpdateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :supporters, :goal_id, :user_id, :created_at, :updated_at
end