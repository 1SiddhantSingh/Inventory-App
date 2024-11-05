import React from 'react'

const Details = () => {
  return (
    <div className=' h-[90%] w-[70%] m-auto '>
        <div className='flex'>
        <img className='w-[40%] max-h-72 hover:scale-125 object-fit overflow-hidden mt-10 p-5' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        <div className='w-[60%] mt-10  '>
            <h1 className='text-3xl font-bold '>ZARA BAG </h1>
            <h2 className='font-semibold text-2xl mt-1 '>$100</h2>
            <button className='px-2 py-2 rounded-md bg-orange-400 text-white mt-2 '>Add to Cart</button>
            <button className='px-2 py-2 rounded-md bg-blue-400 text-white mt-2 ml-3 '>Buy Now</button>
            <p className='mt-3 text-wrap text-left font-small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta exercitationem numquam nisi dolorum aliquam expedita, sapiente autem nostrum blanditiis quos libero quam assumenda ducimus recusandae quis, harum fuga architecto, repellat corrupti minima nihil modi voluptatibus? Alias provident, veritatis fugiat maxime dolor vero, id nostrum debitis nesciunt nobis, vel illum quod?</p>
            
            
        </div>
        </div>
        <div className=''>
        <h2 className='font-semibold '>Category</h2>
           <div>
            <h3>rate</h3>
            <h3>count</h3>
           </div>
           </div>

    </div>
  )
}

export default Details