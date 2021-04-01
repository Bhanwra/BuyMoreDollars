import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

import logoIcon from '../assets/images/logo.png'

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
                props.setUser(response.data.user)

                history.push('/')
            }
        })
    }

    return(
        <main className="px-3 py-8 flex flex-col justify-between h-full">
            <div>
                <h2 className="text-4xl font-bold">Welcome</h2>
                <p>Sign in to continue</p>
            </div>

            <img src={logoIcon} className="w-2/3 text-center flex self-center my-3" />

            <form onSubmit={promptLogin}>
                <div className="grid grid-cols-2">
                    <div className="col-span-2 input-group mt-10">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={getEmail} onChange={(e) => {setEmail(e.target.value)}} required />
                    </div>
                    <div className="col-span-2 input-group mt-10">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={getPassword} onChange={(e) => {setPassword(e.target.value)}} required />
                    </div>
                    <div className="col-span-2 input-group mt-20">
                        <button type="submit" className="w-full">Login</button>
                        <p className="text-center my-4">- or -</p>
                        <Link to="/register">
                            <button type="submit" className="w-full">Create An Account</button>
                        </Link>
                    </div>
                </div>
            </form>
        </main>
    )

}

export default Login