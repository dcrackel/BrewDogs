import Header from '../components/Header'
import Footer from '../components/Footer'

import micro from "../img/columbus_6.jpeg";

import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container className="homecontainer">
                <Container className="homecontainertextcontainer">
                    <Typography className="homecontainertext">Hello from the heart land!</Typography>
                </Container>
                <Container className="homecontainertextcontainer">
                    <img className="homecontainerimage" src={micro} />
                </Container>
                <Container>
                    <Typography className="homecontainertextsmall">
                    In Columbus we have a brand new brew house and taproom, serving up our US-brewed beers and a range of incredible food for anybody who would love to come by and see us. The craft beer scene in America is inspirational to us – from our base in Columbus we are proud to be a part of it. Our epic brewery in the USA is not only a brewery and taproom serving up cutting-edge brews, but also home to the world's first craft beer hotel.
                    </Typography>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Home
