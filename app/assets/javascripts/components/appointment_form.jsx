var AppointmentForm = React.createClass({
  handleChange: function(e) {
    // e.preventDefault();
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    console.log(obj)
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input name="event" placeholder="What?"
             value={this.props.event}
             onChange={this.handleChange}   />
          <input name="slot" placeholder="When?"
             value={this.props.slot}
             onChange={this.handleChange}
          />
          <input type="submit" value="Add this appointment" className="btn" />
        </form>
      </div>
    )
  }
});