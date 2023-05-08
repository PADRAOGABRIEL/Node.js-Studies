require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto')
    })


const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/meuMiddleware')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(meuMiddleware)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('pronto', () =>{
    app.listen(4000, () => {
        console.log(`server running on port 4000`)
    })
} )


