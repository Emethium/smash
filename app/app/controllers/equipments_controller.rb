class EquipmentsController < ApplicationController
    def index
        @equipments = Equipment.all
        respond_to do |format|
            format.html
            format.json {render :json => @equipments}
        end    
    end

    def new
        @equipment = Equipment.new
    end

    def create
        @equipment = Equipment.new(equipment_params)
        if @equipment.save
            flash[:success] = "Novo equipamento cadastrado com sucesso!"
            redirect_to equipments_path
        else
            flash[:error] = "Algo deu errado, tente novamente"
            redirect_to new_equipment_path
        end
    end

    def show
        @equipment = Equipment.find(params[:id])
    end

    def edit
        @equipment = Equipment.find(params[:id])
    end

    def update
        @equipment = Equipment.find(params[:id])
        if @equipment.update_attributes(equipment_params)
            flash[:success] = "Dados atualizados com sucesso!"
            redirect_to @equipment
        else
            flash[:error] = "Ocorreu algum erro. Tente novamente!"
            render 'edit'
        end
    end

    private
        def equipment_params
            params.require(:equipment).permit(:type, :plate)
        end
end