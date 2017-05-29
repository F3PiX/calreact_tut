var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Add an appointment</h3>
        <form>
          <input name="event" placeholder="What?"/>
          <input name="slot" placeholder="When?"/>
          <input type="submit" value="Add to calendar"/>
        </form>
      </div>
    )
  }
});