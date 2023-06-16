import React,{useState,useEffect} from 'react'
import ProductPage from './ProductPage'
import {Link} from 'react-router-dom'
import ProductDetail from './ProductDetail'

const ProductCard = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      console.log(data)
      setProducts(data)
    }

    fetchData()
  }, []);

  return (
    <div>
     <ProductPage/>
     <h1 className=' text-2xl font-bold py-10'> ALL PRODUCTS</h1>
     <ProductDetail product={products} />
    </div>
  )
}

export default ProductCard
