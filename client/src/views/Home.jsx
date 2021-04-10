import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

import logo from '../assets/images/logo.png';
import burger from '../assets/images/burger.png';
import cabbage from '../assets/images/raw-cabbage.png';
import taco from '../assets/images/taco.png';
import booth from '../assets/images/kick-o-matic.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = (props) => {

    const [prizes, setPrizes] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_PATH + 'game/prizes').then(response => {
            if ( response.data.prizes ) {
                setPrizes(response.data.prizes)
            }
        }).catch(err => {
            if ( err ) {
                console.error(err)
            }
        })
    }, [])

    const renderPrizes = () => {
        return prizes.map(prize => {
            return (<li key={`prize_${prize.id}`}><span className="font-semibold text-yellow-600">{prize.prize_count}</span> prize of <span className="font-semibold text-green-800">{Number(prize.prize_amount).toLocaleString()}</span> BuyMore Dollars</li>)
        })
    }

    return (
        <main className="relative">
            <div className="home-bg h-screen overflow-hidden absolute opacity-20">
                <img src={img1} alt="" className="w-9/12 -ml-12 -z-10"/>
                <img src={img2} alt="" className="w-10/12 relative float-right -mr-24 -mt-5 z-10"/>
                <img src={img4} alt="" className="w-10/12 -ml-20 float-left -mt-4 -z-10"/>
                <img src={img3} alt="" className="w-9/12 float-right -mr-5 -mt-5 z-10"/>
            </div>

            <div className="h-screen relative z-20 flex flex-col justify-between">
                <div className="h-full flex flex-col p-5 justify-between">
                    <div className="w-full flex justify-end">
                        <img src={logo} alt="" className="w-5/12 float-right"/>
                    </div>
                    <div>
                        <h3 className="w-7/12">IN PARTNERSHIP WITH</h3>
                        <div className="partnersIcon flex">
                            <img src={burger} alt="" className="bg-white rounded-full pt-1 w-2/12 mr-3"/>
                            <img src={cabbage} alt="" className="bg-white rounded-full w-2/12 mr-3"/>
                            <img src={taco} alt="" className="bg-white rounded-full p-2 w-2/12 mr-3"/>
                            <img src={booth} alt="" className="bg-white rounded-full p-1 w-2/12 mr-3"/>
                        </div>
                    </div>

                    <div className="text-right flex flex-col items-end">
                        <h3 className="w-2/3">Pie your smile with the flipping tile</h3>
                        <p className="w-2/3">Try our new match game and win exclusive prizes from BuyMore Dollars. So, don’t be late and give yourself a break, you won’t regret it.</p>
                    </div>

                    <div>
                        <h3>PRIZES INFO</h3>
                        <ul>
                            {renderPrizes()}
                        </ul>
                    </div>
                </div>

                <div className="w-full relative z-20 shadow-top">
                    <Link to="/login"><button className="uppercase w-1/2 text-lg">Login</button></Link>
                    <Link to="/register"><button className="uppercase w-1/2 text-lg">Register</button></Link>
                </div>
            </div>

        </main>
    )
}

export default Home