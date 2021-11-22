import {userState, useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Product from "./pages/Product";

function App() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])

    const getProduct = (gid) => {
        products.map(product => {
            if (product.id === gid) {
                setProduct(product);
                console.log("PRODUCT %s", product.ingredients);
                const ingredients = Object.values(product.ingredients);
                const malt = Object.values(ingredients[0]);
                malt.map(i => { console.log("I: %s", i.name )});
            }
        });
    };

    const hasLactosInTwist = (data) => {
        data.map((product) => {
            if (product.hasOwnProperty('method')) {
                const method = Object.values(product.method);
                if (method[2] !== null) {
                    method[2].toLowerCase().indexOf("lactose") > 1 ? product.lactose = true : product.lactose = false;
                }
            }
        });
        return data;
    }

    const hasDryHopps = (data) => {
        data.map((product) => {
            const ingredients = Object.values(product.ingredients);
            const hops = Object.values(ingredients[1]);

            hops.map(m => {
                m.add === "dry hop" ? product.dryhop = true : product.dryhop = false
            })
        });
        return data;
    }

    useEffect(() => {
        const getProducts = async() => {
            const productsFromServer = await fetchProducts()
            let data = sortByAbv(productsFromServer);
            data = hasLactosInTwist(data)
            data = hasDryHopps(data)
            setProducts(data)
        }
        getProducts()
    }, [])

    const sortByAbv = (data) => {
        data.sort((a,b) => {
            return b.abv - a.abv;
        })
        return data
    }

    const fetchProducts = async() => {
        const res = await fetch('https://api.punkapi.com/v2/beers?per_page=80')
        let data = await res.json()
        return data
    }

    return (
      <Router>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route exact path='/product' element={<Product product={product}/>} />
              <Route path='/products' element={<Products products={products} getproduct={getProduct} />} />
              <Route path='/about' element={<About />} />
          </Routes>
      </Router>
  );
}

export default App;
