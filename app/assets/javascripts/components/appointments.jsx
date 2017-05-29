var Appointments = React.createClass({
  getInitialState: function () {
    return {
      appointments: this.props.appointments,
      event: '',
      slot: ''
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  render: function () {
    return (
      <div>
        <AppointmentForm
          input_event={this.state.event}
          input_slot={this.state.slot}
          onUserInput={this.handleUserInput}
        />
        <AppointmentsList appointments={this.state.appointments} />
        /* ^ this is now state instead of props, maybe that belongs to previous commit */
      </div>
    )
  }
});