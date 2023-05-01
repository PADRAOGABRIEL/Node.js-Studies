const express = require('express')
const app = express()

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

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre nós')
})

app.listen(3000)