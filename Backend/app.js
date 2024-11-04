const express = require('express');

const router = require('./routes/index')

const cors = require('cors')

const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended:true }))

app.use(express.json())

app.use(cors())

app.use(router)

app.listen(5000 ,()=>{
   console.log('listening on http://localhost:5000')
})
mongoose.connect('mongodb://localhost:27017/Ticket_management', { useNewUrlParser: true, useUnifiedTopology: true })