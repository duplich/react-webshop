import { useEffect, useState } from 'react'
import reactLogo from '../../../src/assets/react.svg';
import * as jsonImages from './images.json'

const images = {
  viteLogo: '/src/assets/vite.svg',
  unsplashImage: 'https://i.imgur.com/3wRX5S0.jpeg'
}

console.log("jsonImages", jsonImages);

import './Home.css'
import { Product } from '../Product/Product.jsx'
import { ProductList } from '../Product/ProductList.jsx'

function Home(){

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // MAKE A REQUESTO TOWARDS WEBSHOP API
    fetch('https://dummyjson.com/products?limit=6')
      .then(res => res.json())
      .then(json => {
        console.log("Products => ", json.products)
        setProductList(json.products)
      })

  }, []);

  return(
    <div className={'home'}>
      <div className={'sidebar'}>
        <img src={images.viteLogo} alt={"SVG LOGO REACT"} height={200} width={200}/>
        <div className={'bg-header'}></div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
      <div className={'right'}>
        <h2>Amazing webshop</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, fuga, nemo! A ad, autem cupiditate debitis eius exercitationem fuga in libero non obcaecati recusandae repudiandae temporibus vel veniam veritatis voluptates!</p>
        <ProductList products={productList} />
      </div>
    </div>
  )
}
export { Home }
