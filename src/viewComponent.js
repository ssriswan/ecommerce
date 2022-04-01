import { Link } from 'react-router-dom';
import { getStore, addToCart, addToWishList } from './sharedModel';
import "./view.css";
import { Header } from './header';
export const ViewComponent = props => {
    const product = getStore("product");

    const addToBag = () => {
        addToCart(product);
        alert("Added to bag");
    }
    const addToWishlist = () => {
        addToWishList(product);
        alert("Added to Wishlist");
    }
    return (
        <div>
            <Header />
            <div className="width-full">
                <div className="width-half">
                    {
                        product.images?.map((img, index) => {
                            return (
                                img.src ?
                                    <div className="width-half" key={index}>
                                        <img src={img.src} alt="Avatar" className="width-full" />
                                    </div>
                                    : ""
                            )
                        })
                    }
                    {/* <div className="width-half">l2</div> */}
                </div>
                <div className="width-half">
                    <h2>{product.brand}</h2>
                    <p>{product.productName}</p>
                    <div>
                        <span className="price span-padding">Rs. {product.price}</span>
                        <span className="span-padding"><strike>Rs. {product.mrp}</strike></span>
                        <span className="offer span-padding">{product.discountDisplayLabel}</span>
                    </div>
                    <p className="tax-content">Inclusive of all taxes</p>
                    <h3>Select size</h3>
                    <p>
                        {
                            product.sizes?.split(',').map((size, index) => {
                                return (
                                    <span className="size-span" key={index}>{size}</span>
                                )
                            })
                        }
                    </p>
                    <div className="width-half btn-bag" onClick={addToBag}>Add to Bag</div>
                    <div className="btn-wishlist" onClick={addToWishlist}>Wishlist</div>
                    <h2>₹ {product.price}</h2><span><strike>₹ {product.mrp}</strike></span><span className="offer">{product.discountDisplayLabel}</span>
                </div>
            </div>
        </div>
    );
}