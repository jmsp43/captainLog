const React = require('react');

class Edit extends React.Component{
     render() {
          const { log } = this.props
          // console.log(log)
    return (    
          <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={log.title}/><br/>
          Entry: <input type="textarea" name="entry"  defaultValue={log.entry}/><br/>
          Ship Broken? 
              { log.shipIsBroken ? <input type="checkbox" name="shipIsBroken"/>: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    )
  }
}
module.exports= Edit;