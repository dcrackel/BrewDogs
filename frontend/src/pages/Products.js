import Header from "../components/Header";
import Card from "@material-ui/core/Card";
import lactose from '../img/lactose3.png';
import dryhop from '../img/dryhoped.png';

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Footer from "../components/Footer";


const Products = ({products, getproduct}) => {
    return (
        <div>
            <Header></Header>
            <Container className="cardContainer">
            {
                products.map((product) => (
                    <Link to={'../product?id='+product.id} onClick={() => getproduct(product.id)} component={RouterLink} key={product.id}>
                    <Card key={product.id} className="cardmedia">
                        <Container className="productimages">
                        <CardMedia
                        className="cardmediaimg"
                        image={product.image_url}
                        title={product.name}
                        />
                        <img className="lactoseicon"
                            src={product.lactose ? lactose : ''} />

                        <img className="dryhopsicon"
                                 src={product.dryhop ? dryhop : ''} />
                        </Container>
                    <CardContent className="cardcontent">
                        <Typography gutterBottom variant="h5" component="h2" className="cardheader">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="cardtagline">
                            {product.tagline}
                        </Typography>
                        <Typography color="textSecondary" display="inline">
                            ibu&nbsp;
                        </Typography>
                        <Typography variant="h5" className="cardabv" display="inline">
                            {product.ibu}
                        </Typography>
                        <Typography color="textSecondary" display="inline">
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                        </Typography>
                        <Typography variant="h5" className="cardabv" display="inline">
                            {product.abv}%
                        </Typography>
                        <Typography color="textSecondary" display="inline">
                            &nbsp;abv
                        </Typography>
                    </CardContent>
                    </Card>
                    </Link>
                ))
            }
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Products
