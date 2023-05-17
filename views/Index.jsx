const React = require("react");
const logs = require('../models/logs')


class Index extends React.Component {
  render() {
      const { logs } = this.props;
    return (
         <div>
              <h1>Logs Index</h1>
        <ul>
                   {logs.map((log, i) => {
                        //needs key prop
                        return (
                 
              <li key = {i}>
                      <a href={`/logs/${log._id}`}>{log.title}<br/>
                         </a>
                      <br />
                      <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      <br />
                           <a href={`/logs/${log._id}/edit`}>Edit This Log</a>
                      </form>
                      <br />
              </li>
            );
          })}
              </ul>
              <nav>
                <a href="/logs/new">Create a New Log</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;