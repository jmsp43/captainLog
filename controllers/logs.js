const express = require('express')
const Logs = require('./models/logs')
const app = express()

app.get(('/'), (req, res) => {
     res.send("Welcome to the Captain's Log")
 })
 

// Index : Show all the things! - GET /fruits
app.get("/logs", async(req, res) => {
     try {
         const allLogs = await Logs.find({})
         res.render("Index", { logs: allLogs })
     }
     catch (error) {
         console.log(error.message)
     }
 });


// New : An empty form for a new thing - GET /fruits/new

app.get('/logs/new', (req, res) => {
     res.render('New')
})


// Delete : Get rid of this particular thing! - DELETE /fruits/:id
app.delete('/logs/:id', async (req, res)=>{
     await Logs.findByIdAndRemove(req.params.id)
     res.redirect('/logs');
});


// Update : Update this specific thing with this updated form - PUT /fruits/:id

app.put("/logs/:id", async (req, res) => {
     try {
          if (req.body.shipIsBroken === 'on') {
               req.body.shipIsBroken = true
          } else {
               req.body.shipIsBroken = false
          }
          const { title, entry, shipIsBroken } = req.body;
   
          await Logs.findByIdAndUpdate(req.params.id, req.body);
          res.redirect(`/logs/${req.params.id}`)
     }
     catch (error) {
          console.log(error.message)
     }
 });

// Create : Make a new thing with this filled out form - POST /fruits
app.post('/logs', async (req, res) => {
     try {
          if (req.body.shipIsBroken === 'on') {
               req.body.shipIsBroken = true
          } else {
               req.body.shipIsBroken = false
          }
          await Logs.create(req.body) 
          res.redirect('/logs')
     }  catch (error) {
          console.log(error);
     }
})


// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
app.get('/logs/:id/edit', async (req, res)=>{
     const foundLog = await Logs.findById(req.params.id)
     // console.log(foundLog)
     res.render('Edit',{ log: foundLog });
})

// Show : Show me this one thing! - GET /fruits/:id (edited)
app.get('/logs/:title', async (req, res) => {
          // const foundLog = await Logs.findById(req.params.id)
          const foundLog = await Logs.find({ title: req.params.title})
          res.render('Show', { log: foundLog });
});