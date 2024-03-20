import { useEffect, useState } from 'react'
import reactLogo from '../../../src/assets/react.svg';
import * as jsonImages from './images.json'
import viteLogo from '../../../public/vite.svg'

// const HOST = process.env.HOST;
const HOST = import.meta.env.VITE_HOST;

const images = {
  viteLogo: '/src/assets/vite.svg',
  unsplashImage: 'https://i.imgur.com/3wRX5S0.jpeg'
}

console.log("current HOST .env variable", HOST)
console.log("jsonImages", jsonImages);

import './Home.css'
import { Product } from '../Product/Product.jsx'
import { ProductList } from '../Product/ProductList.jsx'

function Home(){

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // MAKE A REQUESTO TOWARDS WEBSHOP API
    fetch(`${HOST}/products?limit=6`)
      .then(res => res.json())
      .then(json => {
        console.log("Products => ", json.products)
        setProductList(json.products)
      })

  }, []);

  return(
    <div className={'home'}>
        <img src={viteLogo} alt={"SVG LOGO REACT"}
             height={200}
             width={200}
             style={{padding: 20}}
        />
        <h2>Amazing React & Vite Webshop</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, fuga, nemo! A ad, autem cupiditate debitis eius exercitationem fuga in libero non obcaecati recusandae repudiandae temporibus vel veniam veritatis voluptates!</p>
        <ProductList products={productList} />
    </div>
  )
}
export { Home }
