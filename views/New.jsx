const React = require('react')

class New extends React.Component{
     render() {
          return <div>
               <h1>I'm going to Miami</h1>

               <form action="/logs" method="POST">
                    <h3>Title: </h3>
                    <br/>
               <input type='text'
                         name='title' />
                    <br />
                    <h3>Entry: </h3>
                    <br/>
               <input type='textarea'
                         name='entry' />
                    <br />
                    <h3>Ship Broken? </h3>
                    <br/>
               <input type='checkbox'
                         name='shipIsBroken' />
                    <br/>
               <input type= 'submit'/>
               </form>

          </div>
     }
}

module.exports = New