var Appointment = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.appointment.event}</h3>
        <p>{this.props.appointment.slot}</p>
      </div>
    )
  }
  });