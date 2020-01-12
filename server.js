const express = require('express')
const helmet = require('helmet')
const QueenRouter = require('./queens/queens-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/queens', QueenRouter)

module.exports = server
