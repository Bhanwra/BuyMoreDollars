import coupon from '../assets/images/coupon.png';
import { Link } from 'react-router-dom';

const Win = (props) => {

    return (
        <main className="mt-5 flex flex-col items-center">
            <p className="text-2xl font-bold text-theme-colors-light text-center mt-5">One more step</p>
            <p className="text-center mt-1 mb-5">Find the answer to this equation to <br></br>receive your prize.</p>

            <div className="bg-gray-100 w-10/12 p-3">
                <p className="text-center font-bold text-xl">(2*6) – (20/4)</p>

                <div className="w-10/12 flex justify-items-center m-auto mt-3">
                    <input type="number"/>
                    <button type="submit" className="w-4/12 block ml-3">Answer</button>
                </div>
            </div>


            {/* If answered correctly */}
            <div className="my-5 p-3 w-10/12 bg-gray-200">
                <h2 className=" text-center text-3xl font-bold text-theme-colors-light">Congratulations!</h2>
                <p className="text-center mt-2">Your prize is on it's way.</p>
                <p className="text-center mt-2 text-sm text-theme-colors-d-gold">It will be added to your account in 6-8 weeks</p>

            </div>


            <p className="text-center my-5 text-sm">Thank you for playing and supporting BuyMore!</p>
            <div className="block w-10/12">
                <Link to="/game"><button className="uppercase w-full text-lg m-auto">Back</button></Link>
            </div>
        </main>
    )
}

export default Win