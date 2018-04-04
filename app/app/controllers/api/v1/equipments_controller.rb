module Api
	module V1
		class EquipmentsController < ApplicationController
      			
			def index
				@equipments = Equipment.all.where("activated = ?", true)
				render json: {status: 'SUCCESS', message:'Equipments lock and loaded', data:@equipments}, status: :ok
			end

			def show
				@equipment = Equipment.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific Equipment loaded', data:@equipment}, status: :ok
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

			def debilitate
				@equipment = Equipment.find(params[:id])
				if @equipment.update_attribute(:activated, false)
					render json: {status: 'SUCCESS', message:'Set object visibility to false', data:@equipment.id}, status: :ok
				else
					render json: {status: 'ERROR', message:'Operation not concluded', data:@equipment.errors}, status: :unprocessable_entity
			
				end
			end

			def revive
				@equipment = Equipment.find(params[:id])
				if @equipment.update_attribute(:activated, true)
					render json: {status: 'SUCCESS', message:'Set object visibility to true', data:@equipment.id}, status: :ok
				else
					render json: {status: 'ERROR', message:'Operation not concluded', data:@equipment.errors}, status: :unprocessable_entity
				end
			end

			def search
				@equipments = Equipment.where("plate ILIKE ? AND chassis ILIKE ? AND control_number LIKE ? AND proprietary ILIKE ? AND kind ILIKE ? AND proprietary ILIKE ? AND activated = ?",
				"%#{params[:plate]}%", "%#{params[:chassis]}%", "%#{params[:control_number]}%", "%#{params[:proprietary]}%", "%#{params[:kind]}%", "%#{params[:proprietary]}%", "%#{params[:activated]}%")
				render json: {status: 'SUCCESS', message:'equipments searched!', data:@equipments}, status: :ok
			end

			private
			def equipment_params
				params.permit(:plate, :chassis, :control_number, :proprietary, :kind, :activated)
			end
		end
	end
end