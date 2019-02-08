import React, { Component } from 'react';
import ProductList from './../components/product_list/ProductList';
import Header from './../components/product_list/Header';
import ProductItem from './../components/product_list/ProductItem';

import {connect} from 'react-redux';

import * as actions from './../actions/index';

class ProductContainer extends Component {
    componentWillMount=()=>{
        this.props.onFetchProducts();
    }
    render() {
        var {products, sortPrice}=this.props;
        var proInfo=this.showProductItem(products);
        return (
            <ProductList header={this.showHeader(proInfo.totalProduct, sortPrice)}>
                {proInfo.productList}
            </ProductList>
        );
    }
    showHeader(totalProduct, sortPrice){
        return <Header totalProduct={totalProduct} sortPrice={sortPrice}/>;
    }
    showProductItem=(products)=>{
        var {addCart, filter, sort}=this.props;
        var result= [];
        if(products.length >0){
            if(filter.length >0){
                products=products.filter((item)=>{
                    var availableSizes=item.availableSizes;
                        if(availableSizes.some(r=> filter.indexOf(r) >= 0)){
                            return item;
                        }
                    })
            }
            if(sort.by !=='' && sort.value !==''){
                if(sort.by==='price'){
                    if(sort.value==='lowestprice'){
                        products.sort((pro1, pro2)=>{
                            return pro1.price - pro2.price;
                        })
                    }
                    else if(sort.value==='highestprice'){
                        products.sort((pro1, pro2)=>{
                            return pro2.price - pro1.price;
                        })
                    }
                }
            }
            result=products.map((item, index)=>{
                return  <ProductItem 
                                key={index}
                                item={item}
                                addCart={addCart}
                        />
            })
        }
        
        return {
            productList:result,
            totalProduct:result.length
        };
    }
}
const mapState=(state)=>{
    return {
        products:state.products,
        filter:state.filter.filterItems,
        sort: state.sort
    }
}
const mapDispatch=(dispatch,props)=>{
    return {
        addCart:(product)=>{
            dispatch(actions.ADD_CART(product));
        },
        sortPrice:(value)=>{
            dispatch(actions.SORT_PRICE(value))
        },
        onFetchProducts:()=>{
            dispatch(actions.FETCH_PRODUCT())
        }
    }
}

export default connect(mapState, mapDispatch)(ProductContainer);
