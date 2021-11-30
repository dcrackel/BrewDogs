import { Link } from 'react-router-dom';
import logo from '../img/brewdoglogo.jpg';
import {Container} from "@material-ui/core";

const Header = ({ title }) => {
    return (
        <header >
            <Container className="bannercontainer">
            <div className="banner">
            <img src={logo} alt="logo" className="bannerlogo"/>
                <div className="bannerbar">
                    {/*<Link to='/products?f=new' className="bannerbutton">New Arrivals</Link>*/}
                    <Link to='/products?f=all' className="bannerbutton">Our Beers</Link>
                    {/*<Link to='/products?f=alcholic' className="bannerbutton">Alcoholic</Link>*/}
                    {/*<Link to='/products?f=nofun' className="bannerbutton">Non-Alcoholic</Link>*/}
                </div>
            </div>
            </Container>
            <div className="seperatorbar"></div>
        </header>
    )
}

export default Header
