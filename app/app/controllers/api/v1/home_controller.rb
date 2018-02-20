module Api
    module V1
        def index
            # Simple data shown in the screen banner
            @client_number = Client.count
            @equipment_number = Equipment.count
            @service_number = Service.count

            # All services completed in the current month
            first_of_month = Date.current.beginning_of_month
            last_of_month = Date.current.end_of_month
            @monthly_services = Service.where('done_at BETWEEN ? AND ?', first_of_month, last_of_month)

            # Packaging everything together to transmit
            @home = Home.new
            @home.total_client_number = @client_number
            @home.total_equipment_number = @equipment_number
            @home.total_service_number = @service_number
            @home.monthly_services = @monthly_services
            render json: {status: 'SUCCESS', message:'Sent home screen statistics', data:@home}, status: :ok
        end
    end
end