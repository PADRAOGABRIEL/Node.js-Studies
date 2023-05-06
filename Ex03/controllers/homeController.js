exports.homePage = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('nova rota de post')
}