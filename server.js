const express = require('express')
const helmet = require('helmet')
const QueenRouter = require('./queens/queens-router')


const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/queens', QueenRouter)
//Gets Images
server.use('/queenImages',express.static(__dirname + '/Images'))
//http://localhost:5000/queenImages/*Sub-directory*/*ImageName*
module.exports = server
