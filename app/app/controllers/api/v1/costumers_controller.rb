module Api
	module V1
		class CostumersController < ApplicationController
      			
			def index
				@costumers = Costumer.all
				render json: {status: 'SUCCESS', message:'Costumers lock and loaded', data:@costumers}, status: :ok
			end

			def show
				@costumer = Costumer.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific costumer loaded', data:@costumers}, status: :ok
			end
			
			def create
				@costumer = Costumer.new(costumer_params)
				if @costumer.save
					render json: {status: 'SUCCESS', message:'Saved new costumer, user-san', data:@costumer}, status: :ok
				else
					render json: {status: 'ERROR', message:'Costumer not saved, wonder why', data:@costumer.error}, status: :unprocessable_entity
				end
			end

			def destroy
				@costumer = Costumer.find(params[:id])
				@costumer.destroy
				render json: {status: 'SUCCESS', message:'Costumer succesfully erased from existance', data:@costumer}, status: :ok
			end

			def update
				@costumer = Costumer.find(params[:id])
				if @costumer.update_attributes(costumer_params)
					render json: {status: 'SUCCESS', message:'Updated costumer, move along', data:@costumer}, status: :ok
				else
					render json: {status: 'ERROR', message:'Could not update, blame the dev', data:@costumer.errors}, status: :unprocessable_entity
				end
			end

			def search
				@costumers = Costumer.where("name ILIKE ? AND register_code LIKE ?", "%#{params[:name]}%", "%#{params[:register_code]}%")
				if params[:kind] != ''
					@costumers = @costumers.where(:kind => params[:kind])
				end
				render json: {status: 'SUCCESS', message:'Costumers searched!', data:@costumers}, status: :ok
			end

			private
			def costumer_params
				params.permit(:name, :email, :kind, :register_code, :social_reason)
			end
			def search_params
				params.permit(:name, :register_code, :kind)
			end
		end
	end
end