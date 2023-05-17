const React = require("react");
const logs = require('../models/logs')

const styling = {
    color: '#ffffff',
    backgroundColor: '#00000',
    padding: '15px',
}


class Index extends React.Component {
  render() {
      const { logs } = this.props;
    return (
      <div style = {styling}>
        <h1>Logs Index</h1>
        <ul>
                   {logs.map((log, i) => {
                     key: {i}
            return (
              <li>
                      <a href={`/logs/${log.title}`}>{log.title}<br/>
                         </a>
                      <br />
                      <br/>
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