import { Link } from 'react-router-dom';
import logo from '../img/brewdoglogo.jpg';

const Header = ({ title }) => {
    return (
        <header >
            <div className="banner">
            <img src={logo} alt="logo"/>
                <div className="bannerbar">
                    <Link to='/products?f=new' className="bannerbutton">New Arrivals</Link>
                    <Link to='/products?f=all' className="bannerbutton">All Beers</Link>
                    <Link to='/products?f=alcholic' className="bannerbutton">Alcoholic</Link>
                    <Link to='/products?f=nofun' className="bannerbutton">Non-Alcoholic</Link>
                </div>
            </div>
            <div className="seperatorbar"></div>
        </header>
    )
}

export default Header
