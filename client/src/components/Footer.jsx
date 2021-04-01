import { faGamepad, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Footer = (props) => {
    return (
        <div className="grid grid-cols-3 items-center">
            <div className="text-center">
                <Link to="/" className="p-2 inline-block transition-all hover:text-green-700">
                    <FontAwesomeIcon icon={faHome} className="text-2xl" />
                    <p className="text-xs font-semibold">Home</p>
                </Link>
            </div>
            <div className="text-center">
                <Link to="/" className="p-1 inline-block transition-all hover:text-green-700">
                    <FontAwesomeIcon icon={faGamepad} className="text-6xl" />
                </Link>
            </div>
            <div className="text-center">
                <Link to="/" className="p-2 inline-block transition-all hover:text-green-700">
                    <FontAwesomeIcon icon={faUser} className="text-2xl" />
                    <p className="text-xs font-semibold">Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer