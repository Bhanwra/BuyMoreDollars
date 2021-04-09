const connection = require('../include/database')

const router = require('express').Router()

// const timeDelta = (24) // 24 seconds for debug
const timeDelta = (24 * 60 * 60) // one-day

const timeGate = {
    win: 2 * timeDelta,
    loss: 1 * timeDelta
}

router.post('/verify', (req, res) => {
    connection.query('SELECT * FROM `tb_game_log` WHERE `user_id` = ? ORDER BY `started_on` DESC LIMIT 1', [req.body.user], (err, result) => {
        if ( err ) {
            console.error(err)

            res.json({
                error: true,
                message: 'Could not verify game status'
            })
        }

        let canPlay = false
        let timeTillCanPlay = 0
        if ( result.length > 0 ) {
            console.log('has older entries')
            result.forEach(row => {
                let startedOn = new Date(row.started_on)

                let differenceInTime = Math.round((Date.now() - startedOn) / (1000))

                console.log(`Time difference is ${differenceInTime} seconds and time game is ${ (row.win == 1) ? timeGate.win : timeGate.loss }`)

                if ( row.win == 1 && differenceInTime >= timeGate.win ) {
                    canPlay = true
                } else if ( row.win == 0 && differenceInTime >= timeGate.loss ) {
                    canPlay = true
                }

                timeTillCanPlay = (row.win == 1) ? timeGate.win : timeGate.loss
                timeTillCanPlay -= differenceInTime
            })
        } else {
            canPlay = true
        }
        
        res.json({
            error: false,
            canPlay: canPlay,
            timeTillCanPlay: timeTillCanPlay,
            message: 'Good to go!'
        })
    })
})

router.post('/start', (req, res) => {
    connection.query('INSERT INTO `tb_game_log` (`user_id`, `started_on`) VALUES (?, NOW());', [req.body.user.id], (err, result) => {
        if ( err ) {
            console.error(err)

            res.json({
                error: true,
                message: 'Could not start the game'
            })
        }

        res.json({
            error: false,
            game: result.insertId
        })
    })
})

router.post('/end', (req, res) => {
    // connection.query('UPDATE `tb_game_log` SET `')

    res.send('Wait')
})

module.exports = router