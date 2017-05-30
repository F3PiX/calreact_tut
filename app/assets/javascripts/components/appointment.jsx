var Appointment = React.createClass({
  render: function() {
    return (
      <div className="event">
        <h3>{this.props.appointment.event}</h3>
        <p>{moment(this.props.appointment.slot).format("DD MMMM YYYY h:mm a")}</p>
      </div>
    )
  }
  });