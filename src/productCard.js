import { useState } from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { saveStore } from "./sharedModel";
import { addToWishList } from './sharedModel';
export const ProductCard = props => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const addToWishlist = (event, product) => {
        addToWishList(product);
        event.preventDefault();
        alert("Added to Wishlist");
    }
    return (
        <div className="card"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}>
            <Link to={"/view"} onClick={() => saveStore("product", props.product)}>
                <img src={props.product.searchImage} alt="Avatar" className="width-full" />
                <div className="container">
                    {hover ?
                        <div className="hover-wishlist" onClick={(event) => addToWishlist(event, props.product)}>Wishlist</div>
                        :
                        <div className="hover-brand"><b>{props.product.brand}</b></div>
                    }
                    <div>
                        <span>Rs. {props.product.price}</span><span><strike>Rs. {props.product.mrp}</strike></span><span>{props.product.discountDisplayLabel}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}