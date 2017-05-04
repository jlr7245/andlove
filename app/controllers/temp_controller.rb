class TempController < ApplicationController
  def index
    render json: {message: 'hello world', status: 200}
  end

  def error
    render json: {message: 'Endpoint not found', status: 400}
  end
  
end
