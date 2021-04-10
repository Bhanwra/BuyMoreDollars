import coupon from '../assets/images/coupon.png';
import { Link } from 'react-router-dom';

const Win = (props) => {

    return (
        <main className="mt-5 flex flex-col items-center">

            {/* If answered correctly */}
            <div className="my-5 p-3 w-10/12 bg-theme-colors-l-gold shadow-lg">
                <h2 className=" text-center text-3xl font-bold text-theme-colors-dark">Congratulations!</h2>
                <p className="text-center mt-2 font-medium">Your prize is on it's way.</p>
                <p className="text-center mt-2 text-sm"><span className="font-bold">{props.amountWon} BuyMore Dollars</span> will be added <br></br>to your account in 6-8 weeks</p>

            </div>


            <p className="text-center my-5 text-sm">Thank you for playing and supporting BuyMore!</p>
            <div className="block w-10/12">
                <Link to="/game"><button className="uppercase w-full text-lg m-auto">Back</button></Link>
            </div>
        </main>
    )
}

export default Win