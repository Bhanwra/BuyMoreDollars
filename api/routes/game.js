const connection = require('../include/database')

const router = require('express').Router()

const timeDelta = (24) // 24 seconds for debug
// const timeDelta = (24 * 60 * 60) // one-day

const timeGate = {
    win: 2 * timeDelta,
    loss: 1 * timeDelta
}

const payOutIn = (2*60*1000);

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

router.get('/test', (req, res) => {
    let query = 'SELECT * FROM `tb_prizes` WHERE `prize_count` - `on_hold` > 0 ORDER BY RAND() LIMIT 1'
    connection.query(query, (err, result) => {
        res.json(result)
    })
})

router.post('/start', (req, res) => {
    connection.query('SELECT * FROM `tb_prizes` WHERE `prize_count` - `on_hold` > 0 ORDER BY RAND() LIMIT 1', (prizeErr, prizeResult) => {
        if ( prizeErr ) {
            console.error(prizeErr)

            res.json({
                error: true,
                message: 'Error during prize generation'
            })
        }

        if ( prizeResult.length > 0 ) {
            connection.query('INSERT INTO `tb_game_log` (`user_id`, `started_on`, `prize_id`) VALUES (?, NOW(), ?);', [req.body.user.id, prizeResult[0].id], (err, result) => {
                if ( err ) {
                    console.error(err)
        
                    res.json({
                        error: true,
                        message: 'Could not start the game'
                    })
                }

                connection.query('UPDATE `tb_prizes` SET `on_hold` = `on_hold` + 1 WHERE `id` = ?', [prizeResult[0].id])

                res.json({
                    error: false,
                    gameId: result.insertId,
                    prize: {
                        id: prizeResult[0].id,
                        amount: prizeResult[0].prize_amount
                    }
                })
            })
        } else {
            res.json({
                error: true,
                message: 'No more prizes left'
            })
        }
    })
    
})

router.post('/end', (req, res) => {
    // connection.query('UPDATE `tb_game_log` SET `')
    console.log(req.body)
    try {
        if ( req.body.win ) {
            // won
            connection.query('UPDATE `tb_game_log` SET `win` = 1 WHERE `id` = ?', req.body.gameId)
            // connection.query('UPDATE `tb_users` SET `dollars` = `dollars` + ? WHERE `id` = ?', [req.body.prize.amount, req.body.userId])
            connection.query('UPDATE `tb_prizes` SET `on_hold` = `on_hold` - 1, `prize_count` = `prize_count` - 1 WHERE `id` = ?', req.body.prize.id)

            connection.query('INSERT INTO `tb_payouts` (`user_id`, `game_id`, `amount`, `payout_on`) VALUES (?, ?, ?, ?)', [req.body.userId, req.body.gameId, req.body.prize.amount, new Date(Date.now() + payOutIn)])
        } else {
            // lost
            connection.query('UPDATE `tb_prizes` SET `on_hold` = `on_hold` - 1 WHERE `id` = ?', req.body.prize.id)
        }

        res.json({
            error: false,
            message: "Db updated properly"
        })
    } catch ( ex ) {
        console.error(ex)
        res.json({
            error: true,
            message: "An error occured!"
        })
    }
})

router.post('/history', (req, res) => {

    connection.query('SELECT * FROM `tb_payouts` INNER JOIN `tb_game_log` ON `tb_payouts`.`game_id` = `tb_game_log`.`id` WHERE `tb_payouts`.`user_id` = ? ORDER BY `payout_on` ASC', req.body.userId, (err, result) => {
        if ( err ) {
            res.json({
                error: true,
                message: "Error while fetching history"
            })
        }

        res.json({
            error: false,
            history: result
        })
    })
})

module.exports = router