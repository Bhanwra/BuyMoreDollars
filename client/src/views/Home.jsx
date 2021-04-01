import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

import logo from '../assets/images/logo.png';
import burger from '../assets/images/burger.png';
import cabbage from '../assets/images/raw-cabbage.png';
import taco from '../assets/images/taco.png';
import booth from '../assets/images/kick-o-matic.png';

const Home = (props) => {

    return (
        <main className="relative">
            <div className="home-bg h-screen overflow-hidden absolute opacity-20">
                <img src={img1} alt="" className="w-9/12 -ml-12 -z-10"/>
                <img src={img2} alt="" className="w-10/12 relative float-right -mr-24 -mt-5 z-10"/>
                <img src={img4} alt="" className="w-8/12 -ml-20 float-left -mt-4 -z-10"/>
                <img src={img3} alt="" className="w-9/12 float-right -mr-5 -mt-5 z-10"/>
            </div>

            <div className="h-screen relative z-20 flex flex-col justify-between">
                <div className="h-full flex flex-col justify-center p-5 justify-between">
                    <div className="w-full flex justify-end">
                        <img src={logo} alt="" className="w-6/12 float-right"/>
                    </div>
                    <div>
                        <h3 className="w-7/12">IN PARTNERSHIP WITH</h3>
                        <div className="partnersIcon flex">
                            <img src={burger} alt="" className="w-2/12 mr-3"/>
                            <img src={cabbage} alt="" className="w-2/12 mr-3"/>
                            <img src={taco} alt="" className="w-2/12 mr-3"/>
                            <img src={booth} alt="" className="w-2/12 mr-3"/>
                        </div>
                    </div>

                    <div className="text-right flex flex-col items-end">
                        <h3 className="w-2/3">Pie your smile with the flipping tile</h3>
                        <p className="w-2/3">Try our new match game and win exclusive prizes from BuyMore Dollars. So, don’t be late and give yourself a break, you won’t regret it.</p>
                    </div>

                    <div>
                        <h3>PRIZES INFO</h3>
                        <ul>
                            <li>1 prize of 10,000 BuyMore Dollars</li>
                            <li>5 prizes of 750 BuyMore Dollars</li>
                            <li>10 prizes of 100 BuyMore Dollars</li>
                            <li>100 prizes of 20 BuyMore Dollars</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative z-20 shadow-top">
                    <button className="uppercase w-1/2 text-lg">Login</button>
                    <button className="uppercase w-1/2 text-lg">Register</button>
                </div>
            </div>

        </main>
    )
}

export default Home