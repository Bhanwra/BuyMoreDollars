const mysql = require('mysql')

const connection = mysql.createConnection({
	host:		process.env.DB_HOST,
	database:	process.env.DB_DATABASE,
	user:		process.env.DB_USER,
	password:	process.env.DB_PASS
})

connection.on("connect", () => {
	console.log("Connected to DB")

})

setInterval(() => {
	connection.query('SELECT * FROM `tb_payouts`', (err, result) => {
		if ( err ) {
			console.error(err)
		} else {
			let pendingPayouts = 0
			result.forEach(payout => {
				if ( Date.now() - new Date(payout.payout_on) >= 0 && payout.paid == 0 ) {
					// payout
            		connection.query('UPDATE `tb_users` SET `dollars` = `dollars` + ? WHERE `id` = ?', [payout.amount, payout.user_id])
					connection.query('UPDATE `tb_payouts` SET `paid` = 1 WHERE `id` = ?', payout.id)
				} else if ( payout.paid == 0 ) {
					pendingPayouts++
				} else {
					// paid out
				}
			})

			console.log(`[${new Date().toLocaleString()}][PAYOUT]: ${pendingPayouts} payout(s) pending.`)
		}
	})
}, 5000)

module.exports = connection