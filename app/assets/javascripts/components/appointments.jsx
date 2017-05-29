var Appointments = React.createClass({
  getInitialState: function () {
    return {
      appointments: this.props.appointments,
      input_event: 'what?',
      input_slot: 'when...?'
    }
  },

  render: function () {
    return (
      <div>
        <AppointmentForm
          input_event={this.state.input_event}
          input_slot={this.state.input_slot} />
        <AppointmentsList appointments={this.props.appointments} />
      </div>
    )
  }
});