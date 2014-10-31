var React = require('react');

var HOME = React.createClass({
  render: function() {
    return (
      <section role="region" className="home-page">
        <article className="content scrollable">
          <form className="vertical-center">
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

module.exports = HOME;