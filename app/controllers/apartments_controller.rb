# the apartments controller got created when we did rails resource
class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
            else
            render json: apartment.errors, status: :unprocessable_entity
        end
    end
    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
    end

    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        redirect_to apartments_path
    end
    
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end
end