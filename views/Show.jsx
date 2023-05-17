const React = require('react')
class Show extends React.Component {
  render () {
       const log = this.props
       console.log(log)
    return (
      <div>
            <h1> Log Show Page </h1>
            <br />
            <br />
              <p> log info here </p>
              <p>{log.title}</p>
              <p>{log.entry}</p>
              <p>Ship Broken? {log.shipIsBroken}</p>
            <br />
            <br />
            <a href= '/logs/'>Back to all logs</a>
      </div>
      );
     }
   }
  module.exports  = Show;