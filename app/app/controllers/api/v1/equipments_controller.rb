module Api
	module V1
		class EquipmentsController < ApplicationController
      			
			def index
				@equipments = Equipment.all
				render json: {status: 'SUCCESS', message:'Equipments lock and loaded', data:@equipments}, status: :ok
			end

			def show
				@equipment = Equipment.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific Equipment loaded', data:@equipments}, status: :ok
			end
			
			def create
				@equipment = Equipment.new(equipment_params)
				if @equipment.save
					render json: {status: 'SUCCESS', message:'Saved new equipment, user-san', data:@equipment}, status: :ok
				else
					render json: {status: 'ERROR', message:'Equipment not saved, wonder why', data:@equipment.error}, status: :unprocessable_entity
				end
			end

			def destroy
				@equipment = Equipment.find(params[:id])
				@equipment.destroy
				render json: {status: 'SUCCESS', message:'Equipment succesfully erased from existance', data:@equipment}, status: :ok
			end

			def update
				@equipment = Equipment.find(params[:id])
				if @equipment.update_attributes(equipment_params)
					render json: {status: 'SUCCESS', message:'Updated Equipment, move along', data:@equipment}, status: :ok
				else
					render json: {status: 'ERROR', message:'Could not update, blame the dev', data:@equipment.errors}, status: :unprocessable_entity
				end
			end

			private
			def equipment_params
				params.permit(:plate, :chassis, :control_number, :proprietary, :kind)
			end
		end
	end
end