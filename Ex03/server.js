const express = require('express')
const app = express()
const routes = require('./routes')

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.use(routes)

app.listen(4000, () => {
    console.log(`server running on port 4000`)
})

