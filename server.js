// server.js

const express = require("express");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan')
const fs = require('fs')

//middleware to serve static content
app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

// add any necessary code you'd want to!

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect('https://github.com/ianayala01/collab-webpage')
  //TODO add code!
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect('https://github.com/ianayala01/Typesetting')
  //TODO add code
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  //TODO add code
  res.redirect('https://github.com/ianayala01/four-sorting-algo-1')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});