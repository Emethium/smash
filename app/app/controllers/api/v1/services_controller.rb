module Api
	module V1
		class ServicesController < ApplicationController
      			
			def index
				@service = Service.all
				render json: {status: 'SUCCESS', message:'Services lock and loaded', data:@service}, status: :ok
			end

			def show
				@service = Service.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific service loaded', data:@service}, status: :ok
			end
			
			def create
				@service = Service.new(service_params)
				if @service.save
					render json: {status: 'SUCCESS', message:'Saved new service, user-san', data:@service}, status: :ok
				else
					render json: {status: 'ERROR', message:'Service not saved, wonder why', data:@service.error}, status: :unprocessable_entity
				end
			end

			def destroy
				@service = Service.find(params[:id])
				@service.destroy
				render json: {status: 'SUCCESS', message:'Service succesfully erased from existance', data:@service}, status: :ok
			end

			def update
				@service = Service.find(params[:id])
				if @service.update_attributes(service_params)
					render json: {status: 'SUCCESS', message:'Updated service, move along', data:@service}, status: :ok
				else
					render json: {status: 'ERROR', message:'Could not update, blame the dev', data:@service.errors}, status: :unprocessable_entity
				end
			end

			def search
				@services = Service.where("name ILIKE ? AND costumer ILIKE ? AND equipment LIKE ? AND company ILIKE ?",
								"%#{params[:name]}%", "%#{params[:costumer]}%", "%#{params[:equipment]}%", "%#{params[:company]}%")
				
				if params[:year1] != ''
					@services = @services.where('extract(year from done_at) = ?', "#{params[:year1]}")
				end
				if params[:month1] != ''
					@services = @services.where('extract(month from done_at) = ?', "#{params[:month1]}")
				end
				if params[:day1] != ''
					@services = @services.where('extract(day from done_at) = ?', "#{params[:day1]}")
				end
				if params[:year2] != ''
					@services = @services.where('extract(year from next_service) = ?', "#{params[:year2]}")
				end
				if params[:month2] != ''
					@services = @services.where('extract(month from next_service) = ?', "#{params[:month2]}")
				end
				if params[:day2] != ''
					@services = @services.where('extract(day from next_service) = ?', "#{params[:day2]}")
				end

				render json: {status: 'SUCCESS', message:'services searched!', data:@services}, status: :ok
			end

			private
			def service_params
				params.permit(:order, :name, :cost, :costumer, :equipment, :company, :done_at, :next_service, :day1, :day2, :month1, :month2, :year1, :year2)
			end
		end
	end
end