import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
      ${(Math.random() * 255).toFixed()} ,
      ${(Math.random() * 255).toFixed()},0.4)`;
  };

  console.log(color());

  return (
    <nav className="w-[15%] h-full pt-5  flex flex-col items-center bg-zinc-100 ">
      {/* <Link to='/create'>Add Product</Link> */}
      <h1 className="   border border-blue-400 rounded border-2 px-1 py-1 mt-5 hover:bg-zinc-100 text-blue-400">
        {" "}
        Add New Products{" "}
      </h1>
      <hr className="my-3 w-[50%]" />
      <h1 className="mb-2  font-semibold w-[90%]">Categories Filter </h1>
      <div className="font-thin ">
        {distinct_category.map((c, i) => (
          <Link
            to={`/?category=${c}`}
            className="flex items-center gap-1 mb-2  "
          >
            <span
              style={{ backgroundColor: color() }}
              className="rounded-full mr-2 w-[15px] h-[15px]"
            ></span>{" "}

            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
