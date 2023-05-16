const React = require('react')

class New extends React.Component{
     render() {
          return <div>
               <h1>I never seen so many Dominican women with cinnamon tans</h1>

               <form action="/logs" method="POST">
               <input type='text'
                         name='title' />
                    <br/>
               <input type='textarea'
                         name='entry' />
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