import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'

const Header = (props) => {
    return (
        <div className="w-full flex justify-between items-center h-28 p-2 px-5  z-11">
        <img src={logo} alt="" className="h-full"/>
            <div className="flex flex-col h-3/6 items-end justify-evenly">
                { (props.user) ? (
                    <span className="text-right">Hi, <strong className="text-theme-colors-dark cursor-pointer">
                        <Link to="/profile">
                            { props.user.name }
                        </Link>
                    </strong></span>
                ) : (
                    <span className="">Guest</span>
                ) }
                { (props.isLoggedIn) ? (
                    <span className="font-medium text-xs cursor-pointer text-theme-colors-d-gold" onClick={props.logoutAction}>Not you? Logout</span>
                ) : (<></>) }
            </div>
        </div>
    )
}

export default Header