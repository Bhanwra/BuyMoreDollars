import { Link } from 'react-router-dom';
const Home = (props) => {

    return (
        <>
            Home Page
            <Link to="/game" className="cursor-pointer p-2 font-bold text-green-700">Game Page</Link>
        </>
    )
}

export default Home