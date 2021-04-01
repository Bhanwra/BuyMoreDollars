import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
const Home = (props) => {

    return (
        <main>
            <div className="home-bg h-screen overflow-hidden opacity-20 -z-10">
                <img src={img1} alt="" className="w-9/12 -ml-12 -z-10"/>
                <img src={img2} alt="" className="w-10/12 float-right -mr-24 -mt-5 z-10"/>
                <img src={img4} alt="" className="w-8/12 -ml-20 float-left -mt-4 -z-10"/>
                <img src={img3} alt="" className="w-9/12 float-right -mr-5 -mt-5 z-10"/>
            </div>
        </main>
    )
}

export default Home