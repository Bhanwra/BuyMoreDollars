import coupon from '../assets/images/coupon.png';
import { Link } from 'react-router-dom';

const lost = (props) => {

    return (
        <main className="mt-5">
            <h2 className="game_result text-center text-3xl font-bold  text-red-500">Uh-oh!</h2>
            <p className="text-center font-bold my-5">Looks like it just wasn't your day. <br></br>Better luck next time, friend!</p>

            <img src={coupon} alt="" className="w-10/12 m-auto"/>

            <p className="text-center my-5 text-sm">You received a coupon. <br></br>Thank you for playing and supporting BuyMore!</p>

            <div className="flex justify-center">
                <Link to="/game" className="w-10/12"><button className="uppercase w-full text-lg m-auto">Back</button></Link>
            </div>
        </main>
    )
}

export default lost