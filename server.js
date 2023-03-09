//"express practice"
//install package.json with install init -y (-y is default values)
//build hello world application
//express is a third party library stored in the modules folder
//require is a function - pass it an argument ('express')...store return value in a variable
//use same name, as is the convention

//three dots under require are showing react syntax which is IMPORT

//similar to async, await, or fetch
//function can be written 2 ways as well function or () =>, anonymous function?

//LOAD EXPRESS
const express = require('express')

//CALL EXPRESS
const app = express()

//ROOT ROUTE '/' FOR OUR APP
app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>')
})

//TELL THE APP TO LISTEN ON PORT 8080, 3000, ETC. FOR HTTP REQUESTS
app.listen(3000, function() {
    console.log('Listening on port 3000')
})

//BASIC EXPRESS SERVER IS NOW RUNNING
//GIT BASH: node server