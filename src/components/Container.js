import React, { Component } from 'react';
import FilterSize from './filter/FilterSize';
import ProductList from './product_list/ProductList';
import Cart from './cart/Cart';
import Footer from './Footer';

class Container extends Component {
  render() {
    return (
        <div>
            <main>
                {/* filter */}
                <FilterSize/>
                {/* product list */}
                <ProductList/>
            </main>
            <Footer/>
            <Cart/>
        </div>

    );
  }
}

export default Container;
