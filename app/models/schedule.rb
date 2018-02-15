class Schedule < ApplicationRecord
  belongs_to :room, presence: true
  belongs_to :user, presence: true

  validates :date, presence: true
  validates :hour, presence: true, inclusion: { in: 10..19 }
end
