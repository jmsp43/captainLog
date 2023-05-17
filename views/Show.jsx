const React = require('react')
class Show extends React.Component {
  render () {
       const { log } = this.props
       console.log(log)
    return (
      <div>
            <h1> Log Show Page </h1>
            <br />
            <br />
              <h2>{log[0].title}</h2>
              <p>{log[0].entry}</p>
              <p>Ship Broken?
               <br/>    {
                   log[0].shipIsBroken === false ? 'Ship is not broken' : 'Ship is good'}</p>
         <br/>
              <p>Log created at : {log[0].createdAt.toString()}</p>
            <br />
            <br />
            <a href= '/logs/'>Back to all logs</a>
      </div>
      );
     }
   }
  module.exports  = Show;