class UsersController < ApplicationController
  def login
    user = User.find_by email: params['email']

    if user
      user.generate_token
      render json: { user: user.as_json(only: [:id, :name, :auth_token]) }
    else
      head :not_found
    end
  end

  def current
    user = User.find_by auth_token: params['auth_token']

    if user
      render json: { user: user.as_json(only: [:id, :name]) }
    else
      head :not_found
    end
  end

  def register
    if user = User.create user_params
      render json: { user: user.as_json(only: [:id, :name, :auth_token]) }
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
