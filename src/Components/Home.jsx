import React, { useContext, useState ,useEffect } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);

  const {search } = useLocation() ;
  const category = decodeURIComponent(search.split("=")[1]) ;

  const [filterProducts , setFilterProducts] = useState(null) ;

  // const getProductsCategory = async () =>{
  //   try{
  //     const {data } = await axios.get(`/products/category/${category}`);
  //     setFilterProducts(data) ;
  //     console.log(data) ;
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  useEffect(() =>{
    if(!filterProducts || category == "undefined" ) setFilterProducts(products)
    if(category != "undefined" ) 
      // getProductsCategory();
      setFilterProducts(products.filter(p => p.category == category));
 
  },[category,products])

    console.log(filterProducts)
  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] flex flex-wrap gap-3 pt-10 pl-10 ">
        {filterProducts && filterProducts.map((p,i) => 
            <Link key={p.id}  to={`/details/${p.id}`}>
            <div className="w-60 h-60 bg-white border-2 border-zinc-200">
              <img
                className="w-full hover:scale-110  h-40 object-fit "
                src={p.image}
              />
  
              <div className="flex text-balance flex-col px-2">
                <h1 className="font-bold truncate   mt-2">{p.title}</h1>
                <p className="text-xs text-medium truncate">
                {p.description}
                </p> 
              </div>
            </div>
          </Link>
         ) }
        
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
