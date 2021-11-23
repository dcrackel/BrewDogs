import {Button, Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
    return (
        <footer>
            <Container className="footersignupcontainer">
                <Container className="containersignuptext">
                    <Typography className="footersignuptext" variant="body2" color="textSecondary">SIGN UP TO OUR NEWSLETTER TO GET THE LASTEST NEWS!</Typography>
                </Container>
                <Container className="containersignuptext">
                    <TextField id="outlined-basic" label="Enter Your Email Address" variant="outlined" className="signuptextfield" />
                </Container>
                <Container className="containersignuptext2">
                    <Button variant="contained" className="signupbutton">Sign Up!</Button>
                </Container>
            </Container>
            <Container className="footermenucontainer">
            </Container>
            <Container className="footerbottomcontainer">
                <div className="copyrighttext">© Copyright BrewDog 2021</div>
            </Container>
        </footer>
    )
}

export default Footer
