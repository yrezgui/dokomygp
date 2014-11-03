var React = require('react');

var DoctorItem = React.createClass({
  callDoctor: function () {
    return new window.MozActivity({
      name: 'dial',
      data: {
        number: this.props.doctor.phone
      }
    });
  },
  render: function() {
    return (
      <li onClick={this.callDoctor}>
        <p className="doctor-name">{this.props.doctor.name.toLowerCase()}</p>
        <p className="doctor-address">{this.props.doctor.address.replace('\n', ' \u0387 ')}</p>
      </li>
    );
  }
});

module.exports = DoctorItem;