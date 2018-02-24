module Api
	module V1
		class ServiceTypesController < ApplicationController
      			
			def index
				@types = ServiceType.all
				render json: {status: 'SUCCESS', message:'Types lock and loaded', data:@types}, status: :ok
			end

			def show
				@type = ServiceType.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific type loaded', data:@type}, status: :ok
			end
			
			def create
				@type = ServiceType.new(type_params)
				if @type.save
					render json: {status: 'SUCCESS', message:'Saved new type, user-san', data:@type}, status: :ok
				else
					render json: {status: 'ERROR', message:'Type not saved, wonder why', data:@type.error}, status: :unprocessable_entity
				end
			end

			def destroy
				@type = ServiceType.find(params[:id])
				@type.destroy
				render json: {status: 'SUCCESS', message:'Type succesfully erased from existance', data:@type}, status: :ok
			end

			def update
				@type = ServiceType.find(params[:id])
				if @type.update_attributes(type_params)
					render json: {status: 'SUCCESS', message:'Updated type, move along', data:@type}, status: :ok
				else
					render json: {status: 'ERROR', message:'Could not update, blame the dev', data:@type.errors}, status: :unprocessable_entity
				end
			end

			private
			def type_params
				params.permit(:kind)
			end
		end
	end
end