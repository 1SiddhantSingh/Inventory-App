import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/Axios";

const Details = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  const getsingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleProduct();
  }, []);

  return singleProduct ? (
    <div className=" h-[90%] w-[70%] m-auto ">
      <div className="flex">
        <img
          className="w-[40%] max-h-72 hover:scale-125 object-fit overflow-hidden mt-10 p-5"
          src={singleProduct.image}
        />
        <div className="w-[60%] mt-10  ">
          <h1 className="text-3xl font-bold ">{singleProduct.title} </h1>

          <h2 className="font-semibold text-2xl mt-1 text-red-400">
            ${singleProduct.price}
          </h2>
          <h2 className="font-small text-zinc-600 ">
            {singleProduct.category}
          </h2>
          <button className="px-2 py-2 rounded-md bg-orange-400 text-white mt-2 ">
            Add to Cart
          </button>
          <button className="px-2 py-2 rounded-md bg-blue-400 text-white mt-2 ml-3 ">
            Buy Now
          </button>
          <p className="mt-3 text-wrap text-left font-small mb-3">
            {singleProduct.description}
          </p>
          <Link className="border-1 border-red-400 font-medium border px-1 py-1 mr-2 ">
            Edit
          </Link>
          <Link className="border-1 border-red-400 font-medium border px-1 py-1 ">
            Delete
          </Link>
        </div>
      </div>
      <div className="">
        <div>
          <h3>{singleProduct.rate}</h3>
          <h3>{singleProduct.count}</h3>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
