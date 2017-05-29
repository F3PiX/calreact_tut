var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Add an appointment</h3>
        <form>
          <input name="event" placeholder="What?" value={this.props.input_event}/>
          <input name="slot" placeholder="When?" value={this.props.input_slot}/>
          <input type="submit" value="Add to calendar"/>
        </form>
      </div>
    )
  }
});