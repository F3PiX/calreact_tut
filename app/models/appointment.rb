class Appointment < ApplicationRecord
  
  scope :earliest_first, -> { order(slot: :asc)}
end
