class Service < ApplicationRecord
  belongs_to :equipments
  belongs_to :company
  belongs_to :costumer

  validates :done_at, presence: true
  validates :name, presence: true
end
