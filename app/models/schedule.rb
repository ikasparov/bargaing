class Schedule < ApplicationRecord
  belongs_to :room
  belongs_to :user

  validates :date, :room, :user, presence: true
  validates :hour, presence: true, inclusion: { in: 10..19 }

  validates_uniqueness_of :date, scope: [:hour, :room], message: 'and time has already reserved'
end
