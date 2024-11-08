import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");

  

  const AddProductHandler = (e) => {
    e.preventDefault(); // due to this our page will not refresh
   
    if (
        title.trim().length < 5 ||
        image.trim().length < 5 ||
        category.trim().length < 5 ||
        price.trim().length < 2 ||
        description.trim().length < 10
      ) {
        alert("each field should be  characters filled");
        return;
      }
   
   
    const product = {
      id: nanoid(),
      title,
      image,
      description,
      category,
      price,
    };

   // console.log(product);
    setProducts([...products, product]);
    localStorage.setItem('products' , JSON.stringify([...products,product]));
    navigate("/");
  };

//   console.log(products)

  return (
    <>
      <form
        onClick={ AddProductHandler}
        className="pl-[25%] w-screen h-screen p-[7%] flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-3">ADD A PRODUCT</h1>
        <input
          type="text"
          placeholder="Title"
          className="text-2xl bg-zinc-300 p-2 w-1/2 mb-3"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="Image"
          className="text-2xl bg-zinc-300 p-2 w-1/2 mb-3"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Category"
            className="text-2xl bg-zinc-300 p-2 w-[45%] mb-3"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="text-2xl bg-zinc-300 p-2 w-[45%] mb-3"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          placeholder="enter product description here"
          value={description}
          className="bg-zinc-200 text-1xl p-3 w-1/2 rounded"
        ></textarea>
        <button className="border-2 border-blue-300 rounder-md w-1/4  text-blue-300 py-2 mt-2 hover:bg-blue-300 hover:text-white font-medium">
          Add a Product
        </button>
      </form>
    </>
  );
};

export default Create;
