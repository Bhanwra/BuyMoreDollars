import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'

const Header = (props) => {
    return (
        <div className="flex justify-between p-2">
            { (props.user) ? (
                <span>Welcome, <strong className="text-green-700">{ props.user.name }</strong></span>
            ) : (
                <span>Guest</span>
            ) }
            { (props.isLoggedIn) ? (
                <span className="font-bold text-sm cursor-pointer text-green-700" onClick={props.logoutAction}>Logout</span>
            ) : (<></>) }
        </div>
    )
}

export default Header