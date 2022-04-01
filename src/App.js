import './App.css';
import { FilterComponent } from './filterComponent';
import { Product } from './product';

import BoysProducts from './data/product-boys.json';
import GirlsProducts from './/data/product-girls.json';
import MenProducts from './data/product-men.json';
import WomenProducts from './data/product-women.json';
import { useState } from 'react';
import { findBrandNames, filterProductByBrands } from './util/utility';
import { Header } from './header';

function App() {
  const [products, setProducts] = useState(MenProducts);
  const [brandList, setBrandList] = useState(findBrandNames(MenProducts.products));
  const filterChangeHandler = (gender) => {
    switch (gender) {
      case "Boys":
        setProducts(BoysProducts);
        setBrandList(findBrandNames(BoysProducts.products));
        break;
      case "Girls":
        setProducts(GirlsProducts);
        setBrandList(findBrandNames(GirlsProducts.products));
        break;
      case "Men":
        setProducts(MenProducts);
        setBrandList(findBrandNames(MenProducts.products));
        break;
      case "Women":
        setProducts(WomenProducts);
        setBrandList(findBrandNames(WomenProducts.products));
        break;
      default:
        setProducts([]);
        setBrandList([]);
        break;
    }
  }

  const brandCheckListChangeHandler = (gender, brands) => {
    switch (gender) {
      case "Boys":
        setProducts(filterProductByBrands(BoysProducts.products, brands));
        break;
      case "Girls":
        setProducts(filterProductByBrands(GirlsProducts.products, brands));
        break;
      case "Men":
        const prod = filterProductByBrands(MenProducts.products, brands);
        setProducts(prod);
        break;
      case "Women":
        setProducts(filterProductByBrands(WomenProducts.products, brands));
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="left">
        <FilterComponent brandList={brandList} filterChangeHandler={filterChangeHandler} brandCheckListChangeHandler={brandCheckListChangeHandler} />
      </div>

      <div className="main">
        <Product products={products} />
      </div>
    </div>
  );
}

export default App;