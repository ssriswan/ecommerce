import { Link } from "react-router-dom";
import logo from "./assets/gocomet.png";
import "./header.css";

export const Header = props => {
    return (
        <header className="header-comp">
            <Link to={"/"}>
                <div className="logo">
                    <img src={logo}></img>
                </div>
            </Link>
            {
                props.showIcons === "false" ?
                    "" :
                    <div>
                        <Link to={"/cart"}>
                            <div className="header-div">
                                <span className="header-icon-cart" ></span>
                                <span className="header-icon-text">Cart</span>
                            </div>
                        </Link>
                        <Link to={"/wishlist"}>
                            <div className="header-div">
                                <span className="header-icon-wishlist" ></span>
                                <span className="header-icon-text">Wishlist</span>
                            </div>
                        </Link>
                    </div>
            }

        </header>
    )
}