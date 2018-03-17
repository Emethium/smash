class AuthenticateUser
    prepend SimpleCommand

    def initialize(username, password)
        @username = username
        @password = password
    end

    def call
        JsonWebToken.encode(user_id: user.id) if user
    end

    private
    
    attr_accessor :email, :password
    def user
        user = User.find_by_username(username)
        return user if user && user.authenticate(password)
        errors.add :user_authentication, 'invalid credentials'
        nil
    end
end
