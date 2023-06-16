import React,{useState,useEffect} from 'react'
import Text from './Text';

const ProductPage = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
  
      const fetchCategory = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/categories`);
        const data = await response.json();
        console.log(data)
        setCategories(data)
      }
  
      fetchCategory()
    }, []);
    if(categories.length==0) return <div>Loading.....</div>
    
  return (
    <div>
       <Text cards={categories}/>
    </div>
  )
}

export default ProductPage
