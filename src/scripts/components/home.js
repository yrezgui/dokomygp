var React = require('react');

var Home = React.createClass({
  defaultClassName: 'home-page',
  getInitialState : function(){
    return {
      animation: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      animation: 'current-to-left'
    });

    setTimeout(function() {
      this.setState({
        animation: 'left-to-current'
      });
    }.bind(this), 1000);

    return;
  },
  render: function() {
    return (
      <section role="region" data-position="current" className={this.defaultClassName + ' ' + this.state.animation}>
        <article className="content scrollable">
          <form className="vertical-center" onSubmit={this.handleSubmit}>
            <div className="text-center main-logo">
              <img src="../../../logo.png" />
              <br />
              <h1>Doko My GP</h1>
            </div>
            <p className="text-center">
              <button>Get my position</button>
            </p>
          </form>
        </article>
      </section>
    );
  }
});

module.exports = Home;