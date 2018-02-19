class ServiceTypesController < ApplicationController
    def index
        @serviceTypes = ServiceType.all
        respond_to do |format|
            format.html
            format.json {render :json => @serviceTypes}
        end    
    end

    def new
        @serviceType = ServiceType.new
    end

    def create
        @serviceType = ServiceType.new
        if @serviceType.save
            flash[:success] = "Novo tipo de equipamento cadastrado com sucesso!"
            redirect_to serviceTypes_path
        else
            flash[:error] = "Algo deu errado, tente novamente"
            redirect_to new_serviceType_path
        end
    end

    def show
        @serviceType = ServiceType.find(params[:id])
    end

    def edit
        @serviceType = ServiceType.find(params[:id])
    end

    def update
        @serviceType = ServiceType.find(params[:id])
        if @serviceType.update_attributes(ServiceType_params)
            flash[:success] = "Dados atualizados com sucesso!"
            redirect_to @ServiceType
        else
            flash[:error] = "Ocorreu algum erro. Tente novamente!"
            render 'edit'
        end
    end

    private
        def ServiceType_params
            params.require(:ServiceType).permit(:type, :plate)
        end
end