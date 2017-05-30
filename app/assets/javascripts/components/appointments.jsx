var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      event: '',
      slot: ''
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    // var csrfToken = $('[name="csrf-token"]').attr('content');
    //, 'authenticity_token': csrfToken
    var appointment = {event: this.state.event, slot: this.state.slot};

    $.post('appointments',{appointment: appointment})
    .done(function(data) {
      this.addNewAppointment(data);
    }.bind(this));
  },

  // order doesn't work as expected. I added a asc scope to model and controller. But that wouldn't insert
  // a new appointment at the right place. The function from the tut doesn't work,
  // maybe because I have a datetime slot, and they have a string for dates.
  // I tried: return (a.slot - b.slot)
  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b) {
        return new Date(a.slot) - Date(b.slot);
      })
    });
  },

  render: function() {
    return (
      <div>
        <AppointmentForm
          event={this.state.event}
          slot={this.state.slot}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});