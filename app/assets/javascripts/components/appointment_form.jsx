var AppointmentForm = React.createClass({
  handleChange: function(e) {
    // e.preventDefault();
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return (
      <div>
        <h3>Add an appointment</h3>
        <form>
          <input name="event" placeholder="What?"
             value={this.props.input_event}
             onChange={this.handleChange}   />
          <input name="slot" placeholder="When?"
             value={this.props.input_slot}
             onChange={this.handleChange}
          />
          <input type="submit" value="Add to calendar"/>
        </form>
      </div>
    )
  }
});