import Button from '../components/Button';
import Column from '../components/Column';
import Container from '../components/Container';
import Logo from '../assets/images/Logo.png';
// import Input from '../components/Input';
import Row from '../components/Row';
const Home = (props) => {

    return (
        <main className="wrapper">
            <Container className="width-100 background-white shadow">
                <Row> <Column width="4"></Column>
                    <Column width="8"><img className="right"src={Logo} />
                    </Column>

                    <Column width="8"><h2>IN PARTNERSHIP WITH</h2><div className="partners">


                        <div className="width-20  shadow"><img className="mini" src={Logo}></img></div>
                        <div className="width-20 shadow"><img className="mini" src={Logo}></img></div>
                        <div className="width-20 shadow"><img className="mini" src={Logo}></img></div>
                        <div className="width-20 shadow"><img className="mini" src={Logo}></img></div>                    </div>
                    </Column><Column width="4"></Column>

                    <Column width="4"></Column>  <Column width="8">
                        <p className="right">From cash prizes to exciting adventures, enter our latest contests for a chance to win awesome prizes! Don’t forget to sign up so you don’t miss out.</p>
                        <h5 className="right">Short disclaimer about age, etc... Can be the same text as the one in the formpage botom.</h5>
                    </Column>
                    <Column width="8">

                        <ul>
                            <h2>PRIZES INFO</h2>
                            <li>1 prize of 10,000 BuyMore Dollars</li>
                            <li>5 prizes of 750 BuyMore Dollars</li>
                            <li>10 prizes of 100 BuyMore Dollars</li>
                            <li>100 prizes of 20 BuyMore Dollars</li>
                        </ul>
                    </Column>
                    <Column width="6">
                        <a href="/Form">
                            <Button label="LOG IN" className="btn-block" />
                        </a>  </Column>   <Column width="6">
                        <a href="/Form">
                            <Button label="REGISTER" className="btn-block" />
                        </a>
                    </Column>
                </Row>
            </Container >



        </main>


    )
}

export default Home