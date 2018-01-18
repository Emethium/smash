class ServicesController < ApplicationController
    def index
        @services = Service.all
        respond_to do |format|
            format.html
            format.json {render :json => @services}
        end    
    end

    def new
        @service = Service.new
    end

    def create
        @service = Service.new(service_params)
        if @service.save
            flash[:success] = "Novo serviço registrado!"
            redirect_to services_path
        else
            flash[:error] = "Algo deu errado, tente novamente"
            redirect_to new_service_path
        end
    end

    def show
        @service = Service.find(params[:id])
    end

    def edit
        @service = Service.find(params[:id])
    end

    def update
        @service = Service.find(params[:id])
        if @service.update_attributes(service_params)
            flash[:success] = "Dados do serviço alterados!"
            redirect_to @service
        else
            flash[:error] = "Ocorreu algum erro. Tente novamente!"
            render 'edit'
        end
    end

    private
        def service_params
            params.require(:service).permit(:name, :cost)
        end
end