class ClientMailer < ApplicationMailer

    def welcome_email
        @email = 'nikolas.serafini@gmail.com'
        mail(to: @email, subject: 'Welcome to My Awesome Site')
    end

    private
    def email_params
        params.permit(:emails, :subject, :body)
    end
end
