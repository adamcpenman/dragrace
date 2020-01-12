const express = require('express')

const Queens = require('./queens-module')

const router = express.Router()

router.get('/', (req, res) => {
    Queens.getQueens()
        .then(queen => {
            res.json(queen)
        })
        .catch(err => {
            res.status(500).json({ err: "Failed to get Queens"})
        })
})

router.get('/:id/quotes', (req, res) => {
    const { id } = req.params;

    Queens.getSeasons(id)
        .then(quote => {
            res.status(200).json(quote)
        })
        .catch(err => {
            res.status(500).json({ err: "Failed to get Queen's quote"})
        })
})

module.exports = router;