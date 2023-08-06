import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
const imagen = require.context("../img/");

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <img className="log" src={imagen("./Logo.jpeg")} alt="Imagen" />
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li className="nav-item-dropdown">
               <Link className="nav-link-dropdown" to="/login">Inicio de Sesión</Link>
          </li>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
