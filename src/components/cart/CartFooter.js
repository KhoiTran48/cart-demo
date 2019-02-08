import React, { Component } from 'react';

class CartFooter extends Component {
    checkout=(subTotal)=>{
        alert(`Checkout - Subtotal: $ ${subTotal}`)
    }
    render() {
        var {checkout, subTotal}=this.props;
        subTotal=subTotal.toFixed(2);
        return (
            <div class="float-cart__footer">
                <div class="sub">SUBTOTAL</div>
                <div class="sub-price">
                    <p class="sub-price__val">$ {subTotal}</p></div>
                <div class="buy-btn" onClick={()=>this.checkout(subTotal)}>Checkout</div>
            </div>
        );
    }
}

export default CartFooter;
