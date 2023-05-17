const React = require('react')
class Show extends React.Component {
  render () {
      const log = this.props.logs
    return (
      <div>
            <h1> Log Show Page </h1>
            <br />
            <br />
               <p> log info here </p>
            <br />
            <br />
            <a href= '/logs/'>Go back</a>
      </div>
      );
     }
   }
  module.exports  = Show;