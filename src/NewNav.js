import React from "react";
import { useNavigate } from "react-router-dom";

const NewNav = ({ menuItems }) => {
  const navigate = useNavigate();
  console.log(menuItems[0].name);
  const targetProduct = menuItems[2].child[0].name;
  console.log(targetProduct);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li
                className="nav-item align-self-center cursor-pointer"
                onClick={() => navigate("/home")}
              >
                {menuItems[0].name}
              </li>
              {/* <li className="nav-item align-self-center cursor-pointer" onClick={()=> navigate("/home")}>Home</li> */}
              <li
                className="nav-item align-self-center ms-2"
                tabIndex="-1"
                role="pointer"
                onClick={() => navigate("/contactus")}
              >
                Contactus
              </li>
              <li
                className="nav-item align-self-center ms-2"
                onClick={() => navigate("/aboutus")}
              >
                {menuItems[1].name}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menuItems[2].name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {menuItems[2].child.map((product) => (
                    <li>
                    <a className="dropdown-item" href="#">
                      {product.name}
                    </a>
                  </li>))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewNav;
