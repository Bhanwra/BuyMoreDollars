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

module.exports = connection