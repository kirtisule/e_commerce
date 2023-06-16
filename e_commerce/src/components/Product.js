import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Product = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=12`);
      const data = await response.json();
      console.log(data)
      setProduct(data)
    }

    fetchData()
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-15 mx-auto">
        <h1 className=' text-2xl font-bold py-10'> MOST POPULAR PRODUCTS</h1>
          <div className="flex flex-wrap -m-4">
            {product.map((product) => {
              console.log("product", product)
              const {id,title,category,image,price,description}=product
              return (
                <Link to={`/product/${id}`} className="p-2 md:w-1/4 border-1">
                  <div className="h-full border-2 border-gray-200 border-opacity-100 rounded-lg overflow-hidden">
                    <img className="lg:h-35 md:h-36 w-full object-contain object-center p-2" src={image} alt="blog" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-m title-font font-medium text-gray-800 mb-1">{category}</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-xl-bold">{title}</h1>
                      <p className="leading-relaxed mb-3">${price}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
