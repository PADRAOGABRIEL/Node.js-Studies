const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Uma descricao de teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.homePage = (req, res, next) => {
    res.render('index')
    return
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
    return
}
