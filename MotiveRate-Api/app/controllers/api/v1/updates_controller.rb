class Api::V1::UpdatesController < ApplicationController
  skip_before_action :authorized, only: [:create, :index, :show]
  before_action :set_update, only: [:show, :update, :destroy]

  def index
    @updates = Update.order(:id)
    render json: UpdateSerializer.new(@updates)
  end

  def show
    render json: UpdateSerializer.new(@update)
  end

  # POST / updates
  def create
    @update = Update.create(update_params)
    if @update.valid?
      render json: UpdateSerializer.new(@update),
      status: :created
    else
      render json: { error: "failed to create update" }, status: :not_acceptable
    end
  end

  # PATCH / PUT / updates / 1
  def update
    if @update.update(update_params)
      
      render json: UpdateSerializer.new(@update),
      status: :created
    else
      render json: @update.errors,
             status: :not_acceptable
    end
  end

  # DELETE / updates / 1
  def destroy
    if @update.destroy
      head :no_content,
           status: :ok
    else
      render json: @update.errors,
             status: :not_acceptable
    end
  end

  private

  # # Use callbacks to share common setup or constraints between actions.
  def set_update
    @update = Update.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def update_params
    params
      .require(:update)
      .permit(:text, :supporters, :goal_id, :user_id)
  end
end
