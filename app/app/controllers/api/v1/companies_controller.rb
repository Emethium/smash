module Api
	module V1
		class CompaniesController < ApplicationController
      			
			def index
				@companies = Company.all
				render json: {status: 'SUCCESS', message:'Companies lock and loaded', data:@companies}, status: :ok
			end

			def show
				@company = Company.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific company loaded', data:@company}, status: :ok
			end
			
			def create
				@company = Company.new(company_params)
				if @company.save
					render json: {status: 'SUCCESS', message:'Saved new company, user-san', data:@company}, status: :ok
				else
					render json: {status: 'ERROR', message:'Company not saved, wonder why', data:@company.error}, status: :unprocessable_entity
				end
			end

			def destroy
				@company = Company.find(params[:id])
				@company.destroy
				render json: {status: 'SUCCESS', message:'Company succesfully erased from existance', data:@company}, status: :ok
			end

			def update
				@company = Company.find(params[:id])
				if @company.update_attributes(company_params)
					render json: {status: 'SUCCESS', message:'Updated company, move along', data:@company}, status: :ok
				else
					render json: {status: 'ERROR', message:'Could not update, blame de dev', data:@company.errors}, status: :unprocessable_entity
				end
			end

			private
			def company_params
				params.permit(:name, :social_reason, :cnpj, :email, :city, :state)
			end
		end
	end
end