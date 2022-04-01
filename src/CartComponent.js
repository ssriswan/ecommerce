import { useState } from "react";
import "./cart.css";
import { Header } from "./header";
import { getCartItems, getWishlist, removeCartItemById, removeWishlistItemById } from "./sharedModel";

export const CartComponent = props => {
    const [items, setItems] = useState(props.type === "cart" ? getCartItems() : getWishlist());
    const remove = (removeType, id) => {
        if (removeType === "wishlist") {
            const removedList = removeWishlistItemById(id);
            setItems(removedList);
        } else {
            const removedList = removeCartItemById(id);
            setItems(removedList);
        }
    }
    return (
        <div>
            <Header showIcons="false" />
            {props.type === "wishlist" ?
                <div className="heading">My Wishlist {items?.length} items</div>
                :
                <div className="heading cart-heading">My Bag {items?.length} items</div>
            }

            {props.type === "wishlist" ? items?.map((item, index) => {
                return (
                    <div className="wishlist-card">
                        <img src={item.searchImage} alt="Product Image" />
                        <div>
                            <div>
                                <b>{item.brand}</b>
                                <span className="remove" onClick={() => remove('wishlist', item.productId)}>X</span>
                            </div>
                            {/* <span>Rs. {item.price}</span><span><strike>Rs. {item.mrp}</strike></span><span>{item.discountDisplayLabel}</span> */}
                            <div>
                                <span className="price span-padding">Rs. {item.price}</span>
                                <span className="span-padding"><strike>Rs. {item.mrp}</strike></span>
                                <span className="offer span-padding">{item.discountDisplayLabel}</span>
                            </div>
                        </div>
                    </div>
                )
            })
                :
                items?.map((item, index) => {
                    return (
                        <div className="cart-card">
                            <div className="cart-img-div">
                                <img src={item.searchImage} alt="Product Image" />
                            </div>
                            <div>
                                <div>
                                    <b>{item.brand}</b>
                                    <span className="remove" onClick={() => remove('cart', item.productId)}>X</span>
                                </div>
                                <div className="pname">{item.productName}</div>
                                {/* <span>Rs. {item.price}</span><span><strike>Rs. {item.mrp}</strike></span><span>{item.discountDisplayLabel}</span> */}
                                <div>
                                    <span className="price span-padding">Rs. {item.price}</span>
                                    <span className="span-padding"><strike>Rs. {item.mrp}</strike></span>
                                    <span className="offer span-padding">{item.discountDisplayLabel}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {props.type === "cart" ?
                <div className="place-order">PLACE ORDER</div>
                : ""
            }
        </div>
    )
}