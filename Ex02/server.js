const express = require('express')
const app = express()

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.listen(4000, () => {
    console.log(`server running on port 4000`)
})

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `)
})

app.get('/testes/:id_users?/:parametros?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que vc me enviou foi ${req.body.nome}`)
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre nós')
})

app.listen(3000)