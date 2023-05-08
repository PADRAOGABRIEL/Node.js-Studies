module.exports = (req, res, next) => {
    if (req.body.cliente) {
        console.log()
        console.log(`Vi que vc postoru ${req.body.cliente}`)
        console.log()
    }
    next()
}