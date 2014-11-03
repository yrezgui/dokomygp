var React         = require('react');
var fetch         = require('../utils/fetch');
var geolocation   = require('../utils/geolocation');
var AppConstants  = require('../constants/app-constants');
var AppStatus     = require('../constants/app-status');
var DoctorsList   = require('./doctors-list');
var StatusMessage = require('./status-message');


var Search = React.createClass({
  getInitialState: function() {
    return {
      status: AppStatus.LOADING,
      data: []
    };
  },
  componentDidMount: function() {
    this.refreshData();
  },
  geolocationSuccess: function success(position) {
        
    var sourceUrl = encodeURIComponent(AppConstants.NHS_URL + position.coords.longitude + '/' + position.coords.latitude + AppConstants.EXTRA_NHS_PARAMS);
    var apiUrl    = AppConstants.API_URL + sourceUrl;

    var xhrOptions = {
      method: 'GET',
      url: apiUrl
    };

    return fetch(xhrOptions).then(this.xhrSuccess, this.xhrFail);
  },
  geolocationFail: function fail(error) {
    if (this.isMounted()) {
      this.setState({
        status: AppStatus.GEOLOCATION_FAIL
      });
    }
  },
  xhrSuccess: function success(response) {
    if (this.isMounted()) {

      if(response.results.length === 0) {
        this.setState({
          status: AppStatus.NO_RESULTS,
          data: response.results
        });
      } else {
        this.setState({
          status: AppStatus.DONE,
          data: response.results
        });
      }
    }
  },
  xhrFail: function fail(error) {
    if (this.isMounted()) {
      this.setState({
        status: AppStatus.API_FAIL
      });
    }
  },
  refreshData: function() {
    var locationOptions = {
      timeout: AppConstants.GEOLOCATION_TIMEOUT,
      maximumAge: AppConstants.GEOLOCATION_MAXIMUM_AGE
    };

    this.setState({
      status: AppStatus.LOADING,
      data: []
    });

    geolocation.getCurrentPosition(locationOptions)
      .then(this.geolocationSuccess, this.geolocationFail);
      
  },
  render: function() {

    return (
      <section role="region">
        <header className="fixed">
          <menu type="toolbar">
            <button className="refresh-data" data-icon="reload" onClick={this.refreshData}></button>
          </menu>
          <h1>Doko My GP</h1>
        </header>
        <article className="content scrollable header">
          <StatusMessage status={this.state.status} />
          <div data-type="list">
            <DoctorsList data={this.state.data} />
          </div>
        </article>
      </section>
    );
  }
});

module.exports = Search;