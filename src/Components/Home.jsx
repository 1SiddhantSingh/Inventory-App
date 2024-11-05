import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Nav />
    <div className="h-full w-[85%] flex flex-wrap gap-3 pt-10 pl-10 ">
        <Link to="/details/1" >
            
            <div className="w-60 h-60 bg-white border-2 border-zinc-200">
               <img  className="w-full hover:scale-110  h-40 object-fit " src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                
                <div className="flex text-balance flex-col px-2">
                <h1 className="font-bold text-xl  mt-2">Title</h1>
                <p className="text-xs texr-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quas?</p>
                </div>
            </div>
            </Link>
           

        </div>
        </>
  )
}

export default Home