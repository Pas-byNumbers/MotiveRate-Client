require("byebug")

class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET / users
  def index
    @users = User.order(:id)
    render json: UserSerializer.new(@users).serialized_json
  end

  # GET / users / 1
  def show
    render json: UserSerializer.new(@user).serialized_json
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user).serialized_json }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  # POST / users
  # def create
  #   @user = User.new(user_params)

  #   if @user.save
  #     render json: @user,
  #            status: :created
  #   else
  #     render json: @user.errors,
  #            status: :unprocessable_entity
  #   end
  # end

  # # PATCH / PUT / users / 1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors,
  #            status: :unprocessable_entity
  #   end
  # end

  # # DELETE / users / 1
  # def destroy
  #   @user.destroy
  #   if @user.destroy
  #     head :no_content,
  #          status: :ok
  #   else
  #     render json: @user.errors,
  #            status: :unprocessable_entity
  #   end
  # end

  # private
  # # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params
      .require(:user)
      .permit(:username, :password, :email, :first_name, :last_name, :score, :tier)
  end
end
