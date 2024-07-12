require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

const mongoose = require('mongoose')

const bookRoute = require('./routes/bookRoute')

app.get('/', (request,response)=>{
    response.status(200).json({messsage:"Hello World!"})
})
app.use(express.json())

app.use('/api/v1/books', bookRoute)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.once('open',() => console.log(`Connected to database successfully`))
db.on('error', (errorMessage)=> console.log(errorMessage))

app.listen(PORT, ()=>{
    console.log(`The server started running at http://localhost:${PORT}`)
})