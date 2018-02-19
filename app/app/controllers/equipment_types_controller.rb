class EquipmentTypesController < ApplicationController
    def index
        @equipmentTypes = EquipmentType.all
        respond_to do |format|
            format.html
            format.json {render :json => @EquipmentTypes}
        end    
    end

    def new
        @equipmentType = EquipmentType.new
    end

    def create
        @equipmentType = EquipmentType.new
        if @equipmentType.save
            flash[:success] = "Novo tipo de equipamento cadastrado com sucesso!"
            redirect_to EquipmentTypes_path
        else
            flash[:error] = "Algo deu errado, tente novamente"
            redirect_to new_EquipmentType_path
        end
    end

    def show
        @equipmentType = EquipmentType.find(params[:id])
    end

    def edit
        @equipmentType = EquipmentType.find(params[:id])
    end

    def update
        @equipmentType = EquipmentType.find(params[:id])
        if @EquipmentType.update_attributes(EquipmentType_params)
            flash[:success] = "Dados atualizados com sucesso!"
            redirect_to @EquipmentType
        else
            flash[:error] = "Ocorreu algum erro. Tente novamente!"
            render 'edit'
        end
    end

    private
        def EquipmentType_params
            params.require(:EquipmentType).permit(:type, :plate)
        end
end