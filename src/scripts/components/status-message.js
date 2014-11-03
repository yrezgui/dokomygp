var React     = require('react');
var AppStatus = require('../constants/app-status');

var StatusMessage = React.createClass({
  render: function() {
    
    var messageClass = 'vertical-center text-center ';
    var messageText  = '';

    switch(this.props.status) {

      case AppStatus.DONE:
        messageClass += 'hide';
        break;      

      case AppStatus.NO_RESULTS:
        messageText = 'We didn\'t find any GPs in your area.';
        break;

      case AppStatus.LOADING:
        messageText = 'Loading...';
        break;

      case AppStatus.GEOLOCATION_FAIL:
        messageText = 'Your geolocation position isn\'t available now. Please try later.';
        break;

      case AppStatus.API_FAIL:
        messageText = 'We couldn\'t reach the server. Please try later.';
        break;
    }

    return (
      <h2 className={messageClass}>{messageText}</h2>
    );
  }
});

module.exports = StatusMessage;