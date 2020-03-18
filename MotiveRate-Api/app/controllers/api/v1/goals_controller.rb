class Api::V1::GoalsController < ApplicationController
  skip_before_action :authorized, only: [:create, :index, :show]
  before_action :set_goal, only: [:show, :update, :destroy]

  def index
    @goals = Goal.order(:id)
    render json: GoalSerializer.new(@goals)
  end

  def show
    render json: GoalSerializer.new(@goal)
  end

  # POST / goals
  def create
    @goal = Goal.create(goal_params)
    if @goal.valid?
      render json: GoalSerializer.new(@goal),
      status: :created
    else
      render json: { error: "failed to create goal" }, status: :not_acceptable
    end
  end

  # PATCH / PUT / goals / 1
  def update
    if @goal.update(goal_params)
      
      render json: GoalSerializer.new(@goal),
      status: :created
    else
      render json: @goal.errors,
             status: :not_acceptable
    end
  end

  # DELETE / goals / 1
  def destroy
    if @goal.destroy
      head :no_content,
           status: :ok
    else
      render json: @goal.errors,
             status: :not_acceptable
    end
  end

  private

  # # Use callbacks to share common setup or constraints between actions.
  def set_goal
    @goal = Goal.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def goal_params
    params
      .require(:goal)
      .permit(:title, :description, :category, :deadline, :completed, :user_id)
  end
end
