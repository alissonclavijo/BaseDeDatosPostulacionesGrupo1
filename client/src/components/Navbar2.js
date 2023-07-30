import { Component } from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems";
const imagen = require.context("../img/");

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems" style={{ position: "fixed", width: "100%", top: 0 }} >
                <img className="log" src={(imagen("./Logo.jpeg"))} alt="Imagen" />
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                <ul className={this.state.clicked ? 
                "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                        })
                    }
                                        
                </ul>
            </nav>
        )
    }
}

export default Navbar;