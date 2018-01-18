class CostumersController < ApplicationController
    def index
        @costumers = Costumer.all
        respond_to do |format|
            format.html
            format.json {render :json => @costumers}
        end    
    end

    def new
        @costumer = Costumer.new
    end

    def create
        @costumer = Costumer.new(costumer_params)
        if @costumer.save
            flash[:success] = "Novo cliente cadastrado com sucesso!"
            redirect_to costumers_path
        else
            flash[:error] = "Algo deu errado, tente novamente"
            redirect_to new_costumer_path
        end
    end

    def show
        @costumer = Costumer.find(params[:id])
    end

    def edit
        @costumer = Costumer.find(params[:id])
    end

    def update
        @costumer = Costumer.find(params[:id])
        if @costumer.update_attributes(costumer_params)
            flash[:success] = "Dados atualizados com sucesso!"
            redirect_to @costumer
        else
            flash[:error] = "Ocorreu algum erro. Tente novamente!"
            render 'edit'
        end
    end

    private
        def costumer_params
            params.require(:Costumer).permit(:name, :register_code, :email, :kind)
        end
end