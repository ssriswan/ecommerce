import { useState, useEffect } from "react";
import "./App.css";
import { ProductCard } from "./productCard";
export const Product = (props) => {
    const [search, setSearch] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [products, setProducts] = useState(props.products?.length !== 0 ? props.products.products : []);
    const searchChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value) {
            const searchedProducts = products.filter(item => item.brand?.toLowerCase().includes(event.target.value.toLowerCase()));
            setProducts(searchedProducts);
        } else {
            setProducts(props.products?.length !== 0 ? props.products.products : []);
        }
    }

    useEffect(() => {
        if (search === "")
            setProducts(props.products?.length !== 0 ? props.products.products : []);
    });

    const sortBy = (event) => {
        let sortProducts = [];
        setSortValue(event.target.value);
        switch (event.target.value) {
            case "low-to-high":
                sortProducts = products;
                sortProducts.sort((a, b) => a.price > b.price ? 1 : -1);
                setProducts(sortProducts);
                break;
            case "high-to-low":
                sortProducts = products;
                sortProducts.sort((a, b) => a.price < b.price ? 1 : -1);
                setProducts(sortProducts);
                break;
            case "customer-rating":
                sortProducts = products;
                sortProducts.sort((a, b) => a.rating > b.rating ? 1 : -1);
                setProducts(sortProducts);
                break;
        }
    }
    return (
        <div style={{ width: "100%" }}>
            <div className="product-header">
                <div className="product-sort">
                    <label>Sort by</label>

                    <select name="sort" value={sortValue} onChange={sortBy} placeholder="Sort">
                        <option value="" disabled selected>Select sort option</option>
                        <option value="high-to-low">Price: High to Low</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="customer-rating">Customer rating</option>
                    </select>
                </div>
                <div className="product-search">
                    <label>Search</label>

                    <input type="text" name="search" value={search} onChange={searchChange} />
                </div>
            </div>
            <div style={{ width: "100%" }}>
                {products?.length !== 0 ? products?.map((product, index) => {
                    return (
                        <div className="pcard">
                            <ProductCard product={product} key={index} />
                        </div>
                    )
                })
                    :
                    <div className="pcard">
                        No items found
                    </div>
                }
            </div>
        </div>
    );
}