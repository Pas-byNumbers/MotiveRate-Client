class Api::V1::GoalsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  def index
    @goals = Goal.order(:id)
    render json: GoalSerializer.new(@goals)
  end

end
