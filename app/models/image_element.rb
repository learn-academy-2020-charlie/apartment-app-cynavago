class ImageElement < ApplicationRecord
  belongs_to :apartment
  has_one_attached :image
end
