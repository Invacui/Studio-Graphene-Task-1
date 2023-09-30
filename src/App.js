import React, { useState, useEffect } from "react";
import NewNav from "./NewNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewHome from "./NewHome";
import NewContactus from "./NewContactus";
import NewAboutus from "./NewAboutus";
import NewFooter from "./NewFooter";
import NewProductList from "./NewProductList";

const App = () => {
  // const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const bannerText = "Fresh 2022 look";

  useEffect(() => {
    // Fetch menu data
    // You can fetch this data from a server or use your given array directly.
    const navbar = [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      {
        name: "Our Products",
        id: "product",
        child: [
          { name: "Product 1", id: "p1" },
          { name: "Product 2", id: "p2" },
          { name: "Product 3", id: "p3" },
          { name: "Product 4", id: "p4" },
        ],
      },
      { name: "Contact Us", id: "contact" },
    ];

    setMenuItems(navbar);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={menuItems.length > 0 && <NewNav menuItems={menuItems}/>} />
          <Route path="/home" element={<NewHome />} />
          <Route path="/contactus" element={<NewContactus />} />
          <Route path="/aboutus" element={<NewAboutus />} />
        </Routes>
        <NewProductList />
        <NewFooter />
      </BrowserRouter>
    </>
  );
};
export default App;
