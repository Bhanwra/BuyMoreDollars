import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'

const Header = (props) => {
    return (
        <div className="w-full flex justify-between h-28 p-2  z-11">
        <img src={logo} alt="" className=" "/>
            <div className="flex flex-col h-full items-end justify-evenly">
                { (props.user) ? (
                    <span className="text-right">Hi, <br></br><strong className="text-theme-colors-dark cursor-pointer">
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