const express = require('express')
const app = express()
app.use(express.json())
const ejs = require('ejs')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const dotenv = require('dotenv')
dotenv.config()

const connectDb = require('./config/db')
const form = require('./routes/userRoutes')
const userRoutes = require('./routes/userRoutes')

connectDb()

app.set('view engine', 'ejs');


app.use('/', userRoutes)



const PORT = process.env.PORT || 7000

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})