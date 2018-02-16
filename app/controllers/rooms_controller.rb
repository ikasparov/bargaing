class RoomsController < ApplicationController
  def index
    @rooms = Room.all

    params[:date] ||= Date.current
    @schedules = Schedule.where(date: params[:date].beginning_of_week..params[:date].end_of_week)

    #JBuilder
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
    # TODO : user_id need to get through user token
    params.require(:schedule).permit(:room_id, :user_id, :date, :hour)
  end
end