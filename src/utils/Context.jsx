import React from 'react'
import {useState ,createContext , useEffect} from "react"
import axios from "./Axios"
 
export const ProductContext = createContext() ;
 export const Context = (props) => {

    const[product , setProduct] = useState(null) ;
   
    const getproduct = async () => {
        try{
            const {data} = await axios("/products") ;
            setProduct(data);
        }
        catch(error){
            console.log(error) ;
        }
    } ;

    useEffect(() =>{
        getproduct() ;

    },[]);


    
  return (
    <ProductContext.Provider value={[product,setProduct]}>{props.children}</ProductContext.Provider>
    
  )
}


