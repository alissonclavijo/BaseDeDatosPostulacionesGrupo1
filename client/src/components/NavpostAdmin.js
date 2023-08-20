import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiICons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SiderbarDataRRHH";
import "./NavpostRRHH.css";
import { IconContext } from "react-icons";

function Navpost({ handlesubmit }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleSubmit = () => {
    localStorage.removeItem("tokenRechum");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbarpost1">
          <Link to="#" className="menu-bars1">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu2 active" : "nav-menu2"}>
          <ul className="nav-menu-items1" onClick={showSidebar}>
            <li className="navbar-toggle1">
              <Link to="#" className="menu-bars1">
                <AiICons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (item.title === "Cerrar Sesión") {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={handleSubmit}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navpost;
