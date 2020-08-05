const jsonServer = require('json-server')
const servidor = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const porta = process.env.PORT || 8080;

servidor.use(middlewares)
servidor.use(router)
servidor.listen(porta, () => {
    console.log(`JSON Server está executando em ${porta}`)
}) 