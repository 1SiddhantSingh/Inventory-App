import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  const ChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  //   const [title, settitle] = useState();
  //   const [image, setimage] = useState("");
  //   const [description, setdescription] = useState("");
  //   const [category, setcategory] = useState("");
  //   const [price, setprice] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
  // console.log(product);

  const AddProductHandler = (e) => {
    e.preventDefault(); // due to this our page will not refresh

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 2 ||
      product.description.trim().length < 10
    ) {
      alert("each field should be  characters filled");
      return;
    }

    console.log(product);
    // setProducts([...products, product]);
    // localStorage.setItem('products' , JSON.stringify([...products,product]));
    // navigate("/");
  };

  //console.log(products)

  return (
    <>
      <form
        onClick={AddProductHandler}
        className="pl-[25%] w-screen h-screen p-[7%] flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-3">ADD A PRODUCT</h1>
        <input
          type="text"
          placeholder="Title"
          className="text-2xl bg-zinc-300 p-2 w-1/2 mb-3"
          name="title"
          onChange={ChangeHandler}
        />
        <input
          type="url"
          placeholder="Image"
          className="text-2xl bg-zinc-300 p-2 w-1/2 mb-3"
          name="image"
          onChange={ChangeHandler}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Category"
            className="text-2xl bg-zinc-300 p-2 w-[45%] mb-3"
            name="category"
            onChange={ChangeHandler}
          />
          <input
            type="number"
            placeholder="Price"
            className="text-2xl bg-zinc-300 p-2 w-[45%] mb-3"
            name="price"
            onChange={ChangeHandler}
          />
        </div>
        <textarea
          name="Description"
          onChange={ChangeHandler}
          placeholder="enter product description here"
          className="bg-zinc-200 text-1xl p-3 w-1/2 rounded"
        ></textarea>
        <button className="border-2 border-blue-300 rounder-md w-1/4  text-blue-300 py-2 mt-2 hover:bg-blue-300 hover:text-white font-medium">
          Edit a Product
        </button>
      </form>
    </>
  );
};

export default Create;
