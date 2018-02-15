class RoomsController < ApplicationController
  def index
    render json: { rooms: Room.all.as_json(only: [:id, :name]) }
  end
end
