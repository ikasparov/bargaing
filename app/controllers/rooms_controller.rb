class RoomsController < ApplicationController
  def index
    render json: { rooms: Room.all.as_json(only: [:id, :name]) }
    # @rooms = Room.all
    # if params[:date]
    #   @schedules = 
    # end
  end

  def reserve
    schedule = Schedule.new schedule_permit

    if schedule.save
      render json: schedule.as_json(only: [:id, :date, :hour])
    else
      render json: schedule.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def schedule_permit
    params.require(:schedule).permit(:room_id, :user_id, :date, :hour)
  end
end