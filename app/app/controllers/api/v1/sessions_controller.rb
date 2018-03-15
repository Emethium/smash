class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      render json: {status: 'SUCCESS', message:'Logged succesfully!'}, status: :ok 
    else
      render json: {status: 'ERROR', message:'Wrong credentials'}, status: :unauthorized
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
