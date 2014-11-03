var React       = require('react');
var DoctorItem  = require('./doctor-item');

var DoctorsList = React.createClass({
  render: function() {

    var itemNodes = this.props.data.map(function (doctor) {
      var doctorId = doctor['id/_source'];

      return <DoctorItem key={doctorId} doctor={doctor} />
    });

    return <ul>{itemNodes}</ul>
  }
});

module.exports = DoctorsList;