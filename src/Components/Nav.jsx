import React from 'react'

const Nav = () => {
  return (
    <nav className="w-[15%] h-full pt-5  flex flex-col items-center bg-zinc-100 ">
    {/* <Link to='/create'>Add Product</Link> */}
    <h1 className="   border border-blue-400 rounded border-2 px-1 py-1 mt-5 hover:bg-zinc-100 text-blue-400">
      {" "}
      Add New Products{" "}
    </h1>
    <hr className="my-3 w-[50%]" />
    <h1 className="mb-2  font-semibold w-[90%]">Categories Filter </h1>
    <ul className="font-thin ">
      <li className="flex items-center gap-1 mb-2  ">
        <span className="rounded-full  w-[15px] h-[15px]  bg-red-100 "></span>
        Category-1
      </li>
      <li className="flex items-center gap-1 mb-2  ">
        <span className="rounded-full  w-[15px] h-[15px]  bg-blue-100 "></span>
        Category-2
      </li>
      <li className="flex items-center gap-1 mb-2 ">
        <span className="rounded-full  w-[15px] h-[15px]  bg-green-100 "></span>
        Category-3
      </li>
    </ul>
  </nav>
  )
}

export default Nav