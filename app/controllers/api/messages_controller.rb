class Api::MessagesController < Api::BaseController
  def index
    messages =
      current_user.messages_from_me.where(to_user_id: params[:user_id])
      .or(
        current_user.messages_to_me.where(from_user_id: params[:user_id])
      )
      .order(created_at: :asc)

    render json: { messages: messages }
  end

  def create
    message =
      current_user
      .messages_from_me
      .new(to_user_id: params[:user_id], body: params[:body])

    if message.save
      render json: { message: message }
    else
      render_error message.errors.full_messages, status: :unprocessable_entity
    end
  end
end
