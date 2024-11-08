import React from "react";
import Home from "./Components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import { Link } from "react-router-dom";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  const { search, pathname } = useLocation();

  return (
    <>
      <div className="w-full h-screen flex  ">
        {(pathname != "/" || search.length > 0) && (
          <Link to="/" className="text-red-300 absolute left-[17%] top-[3%]  ">
            HOME
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
