class Costumer < ApplicationRecord
    validates :name, presence: true
    validates :register_code, presence: true
end
