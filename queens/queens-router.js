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

router.get('/:id/queens_season', (req, res) => {
    const { id } = req.params

    Queens.getQueenSeason(id)
        .then(season => {
            res.status(200).json(season)
            })
            .catch(err => {
                res.status(500).json({ err: "Failed to get the Queen with her season"})
            })
        })

router.get('/:id/season', (req, res) => {
    const { id } = req.params

    Queens.getSingleSeason(id)
        .then(season => {
            res.status(200).json(season)
            })
            .catch(err => {
                res.status(500).json({ err: "Failed to get the Queen with her season"})
            })
        })

// router.get('/:id/quotes', (req, res) => {
//     const { id } = req.params;

//     Queens.getQuotes(id)
//         .then(quote => {
//             res.status(200).json(quote)
//         })
//         .catch(err => {
//             res.status(500).json({ err: "Failed to get Queen's quote"})
//         })
// })

module.exports = router;