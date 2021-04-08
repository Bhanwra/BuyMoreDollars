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
        <main className="px-3 py-8 flex flex-col justify-between h-full ">
            <div className="col-span-2 my-6">
                <Link to="/"><img src={logoIcon} className="logo" /></Link>
                <h2 className="text-center text-3xl font-bold mt-3  text-theme-colors-light">Welcome Back</h2>
                <p className="text-center"><strong>10,000 BuyMore Dollars</strong> to win today!</p>
            </div>

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

                        <div className="flex justify-center mt-5">
                            <a href="#" className="text-sm text-theme-colors-dark">Forgot password?</a>
                            <p className="align-middle mx-3 leading-5">•</p>
                            <Link to="/register">
                                <p className="text-sm text-theme-colors-dark">Don't have an account? Sign up</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    )

}

export default Login