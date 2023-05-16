//imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const methodOverride = require('method-override');

// global variables
const app = express()
const port = 3000

//middleware
mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

   app.use((req, res, next) => {
     console.log('Welcome to Miami');
     next();
 });
 app.use(express.urlencoded({extended:false}));
 
 app.use(methodOverride('_method'));
 
 app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
 
// INDUCES
// Routes here in INDUCES order

// Index : Show all the things! - GET /fruits
app.get('/', (req, res) => {
     res.send(`Every day like a mardi gras`)
})


// New : An empty form for a new thing - GET /fruits/new

app.get('/new', (req, res) => {
     res.render('New')
})


// Delete : Get rid of this particular thing! - DELETE /fruits/:id



// Update : Update this specific thing with this updated form - PUT /fruits/:id



// Create : Make a new thing with this filled out form - POST /fruits



// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit



// Show : Show me this one thing! - GET /fruits/:id (edited)


//listener
app.listen(port, () => {
     console.log(`Bienvenido a Miami`)
})