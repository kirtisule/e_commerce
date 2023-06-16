import React from 'react'
import { Link } from 'react-router-dom'

const navigation=[
  {
    name:"Home",
    path:"/"
  },
  {
    name:"Products",
    path:"/productcard"
  },
  {
    name:"About",
    path:"/about"
  },
  {
    name:"Contact",
    path:"/contact"
  },
]

const Navbar = () => {
  return (
    
    <header className="text-gray-600 body-font shadow-lg bg-fuchsia-400">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
      <img style={{width:"80px",borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopOFgDGUBsZV1McUNQZ6tZ5R6mo-1re7eFQ&usqp=CAU" alt="" />
      <span className="ml-3 text-xl">ShopHouse</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {
        navigation.map((navigation)=>{
          return(
            <Link to={navigation.path} className='mr-5 text-hover-fuchsia-900' >{navigation.name}</Link>
          )
        })
      }
     
    </nav>
    <Link to={'/addcard'} className="inline-flex items-center bg-fuchsia-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Go o Card 
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
    
  )
}

export default Navbar
