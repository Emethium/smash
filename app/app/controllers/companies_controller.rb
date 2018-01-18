class CompaniesController < ApplicationController
    def index
        @companies = Company.all
        respond_to do |format|
            format.html
            format.json {render :json => @companies}
        end    
    end

    def new
        @company = Company.new
    end

    def create
        @company = Company.new(company_params)
        if @company.save
            flash[:success] = "Nova empresa cadastrada com sucesso!"
            redirect_to companies_path
        else
            flash[:error] = "Algo deu errado, tente novamente"
            redirect_to new_company_path
        end
    end

    def show
        @company = Company.find(params[:id])
    end

    def edit
        @company = Company.find(params[:id])
    end

    def update
        @company = Company.find(params[:id])
        if @company.update_attributes(company_params)
            flash[:success] = "Dados atualizados com sucesso!"
            redirect_to @company
        else
            flash[:error] = "Ocorreu algum erro. Tente novamente!"
            render 'edit'
        end
    end

    private
        def company_params
            params.require(:company).permit(:name, :cnpj)
        end
end