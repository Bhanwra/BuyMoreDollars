const connection = require('../include/database')
const bcrypt = require('bcrypt')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("User Route")
})

router.post('/login', (req, res) => {
    console.log(req.body)

    // getting account pertaining to the email

    connection.query('SELECT * FROM `tb_users` WHERE `email` = ?', [req.body.email], (err, result) => {
        if ( err ) {
            res.json({
                error: true,
                message: "An error occured!"
            })

            throw err
        }

        if ( result.length > 0 ) {

            result = result[0]

            bcrypt.compare(req.body.password, result.password, (err, same) => {
                if ( err ) {
                    res.json({
                        error: true,
                        message: "An error occured [1]!"
                    })
        
                    throw err
                }

                if ( same ) {
                    bcrypt.hash(String(new Date().toString() + JSON.stringify(result)), Number(process.env.SALT_ROUNDS), (err, token) => {
                        if ( err ) {
                            res.json({
                                error: true,
                                message: "An error occured [2]!"
                            })
                
                            throw err
                        }

                        connection.query('UPDATE tb_users SET ?', {login_token: token})

                        res.json({
                            error: false,
                            message: "Login successful!",
                            token: token,
                            user: result
                        })
                    })
                } else {
                    res.json({
                        error: true,
                        message: "Invalid Password"
                    })
                }
            })

        } else {
            res.json({
                error: true,
                message: "Account does not exist!"
            })
        }
    })

})

router.post('/register', (req, res) => {
    console.log(req.body)

    // checking for duplicate emails
    connection.query(`SELECT id FROM tb_users WHERE email = ?`, req.body.email, (err, result) => {
        if ( err ) throw err

        if ( result.length > 0 ) {
            // account already exists with email

            res.json({
                error: true,
                message: "Account already exists!"
            })
        } else {

            bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS), (err, string) => {
                if ( err ) {
                    res.json({
                        error: true,
                        message: "An error occured!"
                    })
                    
                    throw err
                }

                connection.query(`INSERT INTO tb_users SET ?`,
                        {
                            name: req.body.name,
                            birthday: req.body.birthday,
                            phone: req.body.phone,
                            address: req.body.address,
                            city: req.body.city,
                            province: req.body.province,
                            zip_code: req.body.zipCode,
                            country: req.body.country,
                            email: req.body.email,
                            password: string
                        }, (err, result) => {
                            if ( err ) throw err
            
                            res.json({
                                error: false,
                                message: "Account created!"
                            })
                        }
                    )
            })

        }
        
    })
})

router.post('/relogin', ( req, res ) => {
    console.log(req.body)

    connection.query('SELECT * FROM `tb_users` WHERE ?', {
        login_token: req.body.token
    }, (err, result) => {
        if ( err ) {
            res.json({
                error: true,
                message: "An error occured!"
            })
            
            throw err
        }

        if ( result.length > 0 ) {
            // account found
            res.json({
                error: false,
                message: "Login successful!",
                user: result[0]
            })
        } else {
            res.json({
                error: true,
                message: "Invalid Token!"
            })
        }
    })
})

module.exports = router