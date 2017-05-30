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
    var csrfToken = $('[name="csrf-token"]').attr('content');
    var appointment = {event: this.state.event, slot: this.state.slot};

    $.post('appointments',{appointment: appointment, _csrf_token: csrfToken})
    .done(function(data) {
      this.addNewAppointment(data);
    }.bind(this));
  },

  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({ appointments: appointments});
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