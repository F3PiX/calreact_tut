class AppointmentsController < ApplicationController
   skip_before_action :verify_authenticity_token
  #I dont want this, but I want to go on with the tut
  
  def index
    @appointments = Appointment.all
    @appointment = Appointment.new
  end
  
  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end
  
  private
  def appointment_params
    params.require(:appointment).permit(:event, :slot)
  end
end
