class Api::UsersController < Api::BaseController
  def index
    users = User.where.not(id: current_user.id)
    render json: { users: users }
  end

  def friends
    users = User.where.not(id: current_user.id)
    render json: { users: users }
  end
end
