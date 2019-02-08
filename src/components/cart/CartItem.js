import React, { Component } from 'react';

class CartItem extends Component {

    deleteCart=(id)=>{
        if(window.confirm('Are you sure you wish to delete this item ?')){
            this.props.deleteCart(id);
        }
    }
    render() {
        var {item, editCart, deleteCart}=this.props;
        return (
            <div class="shelf-item">
                <div class="shelf-item__del" onClick={()=>this.deleteCart(item.product.id)}></div>
                <div class="shelf-item__thumb"><img src={require(`../../static/products/${item.product.sku}_2.jpg`)} alt={item.product.title}/></div>
                <div class="shelf-item__details">
                    <p class="title">{item.product.title}</p>
                    <p class="desc">X | Wine
                        <br/>Quantity: {item.quantity}</p>
                </div>
                <div class="shelf-item__price">
                    <p>$ {(item.quantity * item.product.price).toFixed(2)}</p>
                </div>
                <div class="clearfix"></div>
            </div>
        );
    }
}

export default CartItem;
