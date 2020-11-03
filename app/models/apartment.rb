class Apartment < ApplicationRecord
    has_one :image_elements
    belongs_to :user
end
