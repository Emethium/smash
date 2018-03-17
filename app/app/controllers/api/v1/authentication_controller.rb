module Api
    module V1
        class AuthenticationController < ApplicationController
            skip_before_action :authenticate_request
            
            def authenticate
                command = AuthenticateUser.call(params[:username], params[:username])
                if command.success?
                    render json: { auth_token: command.result }
                else
                    render json: { error: command.errors }, status: :unauthorized
                end
            end
        end
    end
end