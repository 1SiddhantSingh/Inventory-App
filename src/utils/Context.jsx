import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "./Axios";

export const ProductContext = createContext();
export const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  // const getproduct = async () => {
  //     try{
  //         const {data} = await axios("/products") ;
  //         setProduct(data);
  //     }
  //     catch(error){
  //         console.log(error) ;
  //     }
  // } ;

  // useEffect(() =>{
  //     getproduct() ;

  // },[]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
