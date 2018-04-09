module Api
    module V1
        class NotificationsController < ApplicationController
            def welcome
                puts 'YAAAAAAAAAAAAAAAAAAAAAAAY'
                ClientMailer.welcome_email.deliver_now
                render json: {status: 'SUCCESS', message:'Welcome email sent!'}, status: :ok                
            end
        end
    end
end