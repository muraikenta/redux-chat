class Api::SessionsController < Api::BaseController
  def me
    render json: {me: current_user}
  end
end
