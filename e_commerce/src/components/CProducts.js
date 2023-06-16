import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import ProductPage from './ProductPage'
import Text from './Text'
import Product from './Product'
import ProductDetail from './ProductDetail'

const CProducts = () => {
    const {name}=useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        const data = await response.json();
        console.log(data)
        setProduct(data)
      }
  
      fetchData()
    }, []);
  return (
    <div className="my-10">
     
      <ProductDetail product={product}/>
    </div>
  )
}

export default CProducts
