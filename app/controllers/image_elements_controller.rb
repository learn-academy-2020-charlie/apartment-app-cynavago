class ImageElementsController < ApplicationController
    def create
        apartment = Apartment.find(apartment_params)
        apartment.image_elements.create
    end

    # def update
    #     apartment = Apartment.find(params[:id])
    #     apartment.update(apartment_params)
    # end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end
end