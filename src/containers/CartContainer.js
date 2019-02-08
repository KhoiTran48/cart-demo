import React, { Component } from 'react';
import Cart from './../components/cart/Cart';
import CartItem from './../components/cart/CartItem';
import CartFooter from './../components/cart/CartFooter';

import {connect} from 'react-redux';

import * as actions from './../actions/index';

class CartContainer extends Component {
    render() {
        
        var {cartInfo, toggleCart, checkout}=this.props;
        var cartSumary=this.cartSumary(cartInfo.carts);
        return (
            <Cart
                showCart={cartInfo.showCart}
                totalQuantity={cartSumary.totalQuantity}
                toggleCart={toggleCart}
                checkout={checkout}
                cartItem={this.showCartItem(cartInfo.carts)}
                footer={this.showFooter(cartSumary.totalValue)}
            />
        );
    }
    showFooter(totalValue){
        var {checkout, carts}=this.props;
        return <CartFooter
                    checkout={checkout}
                    subTotal={totalValue}
                />;
    }
    showCartItem=(carts)=>{
        var {editCart, deleteCart}=this.props;
        var result= null;
        if(carts.length >0){
            result=carts.map((item, index)=>{
                return <CartItem
                            key={index}
                            item={item}
                            editCart={editCart}
                            deleteCart={deleteCart}
                        />
            })
        }
        return result;
    }
    cartSumary=(carts)=>{
        var totalValue=0;
        var totalQuantity=0;
        if(carts.length >0){
            carts.forEach(item => {
                totalValue+=item.quantity * item.product.price;
                totalQuantity+=item.quantity;
            });
        }
        return {
            totalValue,
            totalQuantity
        };
    }
}
const mapState=(state)=>{
    // console.log(state.cartInfo);
    return {
        cartInfo:state.cartInfo
    }
}
const mapDispatch=(dispatch,props)=>{
    return {
        editCart:(product)=>{
            dispatch(actions.EDIT_CART(product));
        },
        deleteCart:(id)=>{
            dispatch(actions.DELETE_CART(id));
        },
        toggleCart:()=>{
            dispatch(actions.TOGGLE_CART());
        },
        checkout:()=>{
            dispatch(actions.CHECKOUT());
        }
    }
}

export default connect(mapState, mapDispatch)(CartContainer);
