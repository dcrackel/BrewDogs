import {useState} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import lactose from "../img/lactose3.png";
import dryhop from "../img/dryhoped.png";

const Product = ({product}) => {
    let [isChecked, setIsChecked] = useState(false);
    const ingredients = Object.values(product.ingredients);
    const malts = Object.values(ingredients[0]);
    const hops = Object.values(ingredients[1]);
    const commaSeperatedMaltNames = malts.map(m => m.name).join(", ");
    const commaSeperatedHopsNames = hops.map(m => m.name).join(", ");

    const toggleIsChecked = () =>
    {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <Header></Header>
            <Container className="productcontainer">
                <Container className="productimagecontainer">
                    <img
                        className="productmedia"
                        src={product.image_url}
                        title=""
                    />
                    <img className="lactoseiconlarge"
                         src={product.lactose ? lactose : ''} />

                    <img className="dryhopsiconlarge"
                         src={product.dryhop ? dryhop : ''} />
                </Container>
            <Card className="productcard">
                <CardContent>
                    <Typography className="productbreadcrumbs">
                        <Link className="productbreadlink">Home</Link> / <Link className="productbreadlink">Breadcrumb</Link> / {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="h2" className="productbigname">
                        {product.name}
                    </Typography>

                    <Container className="productcirclebox">
                        <Container className="productcircleibu">
                            <span className="circletext1">IBU</span><span className="circletext2">{product.ibu}</span>
                        </Container>
                        <Container className="productcircleabv">
                            <span className="circletext3">{product.abv}</span><span className="circletext4">ABV</span>
                        </Container>
                    </Container>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
            </Card>
            </Container>
            <Container className="ingredents" onClick={toggleIsChecked} >
                <Container>
                    <Typography className="ingredientsheader" component="">Ingredients <FontAwesomeIcon className="bigheadericon" icon={isChecked ? faMinus : faPlus} /></Typography>
                </Container>
                <Collapse in={isChecked}>
                <Container>
                    <Typography className="ingredent" variant="body2" color="textSecondary" component="">
                        <span className="boldText">Malts: </span> {commaSeperatedMaltNames}
                    </Typography>
                </Container>

                <Container>
                    <Typography className="ingredent" variant="body2" color="textSecondary" component="">
                        <span className="boldText">Hops: </span> {commaSeperatedHopsNames}
                    </Typography>
                </Container>

                <Container>
                    <Typography className="ingredent" variant="body2" color="textSecondary" component="">
                        <span className="boldText">Yeast:</span> {product.ingredients.yeast}
                    </Typography>
                </Container>
                <Container>&nbsp;</Container>
                </Collapse>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Product
