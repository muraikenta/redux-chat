class Api::BaseController < ApplicationController
  before_action :authenticate_user!

  rescue_from Exception, with: :render_error
  rescue_from ActionView::MissingTemplate, with: :render_not_found

  rescue_from ActiveRecord::RecordNotSaved, with: :render_bad_request
  rescue_from ActiveRecord::RecordInvalid, with: :render_bad_request

  def render_success(message = '')
    @_success = true
    render(
      json: { success: true, message: message },
      status: 200,
    )
  end

  def render_error(error = '', options = {})
    message = case error
              when Exception
                error.message
              when Array
                error.to_json
              when Hash
                error[:message]
              else
                error
              end
    logger.error("API error occured: #{message}")

    status = options[:status] || :internal_server_error
    render(
      json: { errors: message },
      status: status,
    )
  end

  def render_unauthorized(_e = nil)
    logger.info('API error occured: unauthorized')
    render(
      json: { message: 'authorization required' },
      status: :unauthorized,
    )
  end

  def render_not_found(_e = nil)
    logger.error('API error occured: not found')
    render(
      json: { message: 'not found' },
      status: :not_found,
    )
  end

  def render_bad_request(_e = nil)
    logger.info('API error occured: bad request')
    render(
      json: { message: 'bad request' },
      status: :bad_request,
    )
  end

  private

  def authenticate_user!
    return if current_user
    render(
      json: { error: 'unauthorized' },
      status: :unauthorized,
    )
  end
end
