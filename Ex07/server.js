const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/meuMiddleware')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(meuMiddleware)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(4000, () => {
    console.log(`server running on port 4000`)
})
