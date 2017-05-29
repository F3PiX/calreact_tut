var Appointments = React.createClass({
  render: function () {
      return (
          <div>
              {this.props.appointments.map(function (appointment) {
                  return (
                      <div>
                          <h3>{appointment.event}</h3>
                          <p>{appointment.slot}</p>
                      </div>
                  )
              })}
          </div>
      )
  }
});