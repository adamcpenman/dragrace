const server = require('./server')

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}, queen.`)
})

server.get('/', (req, res) => {
    res.send(`<h2>project_queen</h2>`)
})
