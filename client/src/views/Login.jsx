import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"

const Login = (props) => {

    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')

    const history = useHistory()

    const promptLogin = (e) => {
        e.preventDefault()

        axios({
            url: process.env.REACT_APP_API_PATH + 'user/login',
            method: "POST",
            data: {
                email: getEmail,
                password: getPassword
            }
        }).then((response) => {
            if ( !response.data.error ) {
                localStorage.setItem('loginToken', response.data.token)

                props.setLoggedIn(true)

                history.push('/')
            }
        })
    }

    return(
        <form onSubmit={promptLogin}>
            <div className="grid grid-cols-2">
                <div className="col-span-2 input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={getEmail} onChange={(e) => {setEmail(e.target.value)}} required />
                </div>
                <div className="col-span-2 input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={getPassword} onChange={(e) => {setPassword(e.target.value)}} required />
                </div>
                <div className="col-span-2 input-group">
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    )

}

export default Login