class AppointmentsController < ApplicationController
  
  def index
    @appointments = Appointment.all
    @appointment = Appointment.new
    
  end
  
  def create
    @appointments = Appointment.order('slot ASC')
    #In learnetto this is Appointment.create(...)
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      redirect_to action: :index
    end
  end
  
  private
  def appointment_params
    params.require(:appointment).permit(:event, :slot)
  end
end
