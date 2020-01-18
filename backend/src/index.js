const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

//connect mongoDB
mongoose.connect('mongodb+srv://root:root@cluster0-xgjmb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

app.use(express.json()) // to use json in express { important that it comes before the routes }
app.use(routes) // for a use of the routes
app.listen(3333) // web port config