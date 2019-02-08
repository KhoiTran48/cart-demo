import React, { Component } from 'react';

class ProductItem extends Component {
    showIconFreeShip(){
        return(
            <div class="shelf-stopper">Free shipping</div>
        )
    }
    render() {
        var {item, addCart}=this.props;
        return (
            <div class="shelf-item">
                {item.isFreeShipping ? this.showIconFreeShip() : ''}
                <div class="shelf-item__thumb"><img src={require(`../../static/products/${item.sku}_1.jpg`)} alt={item.title}/></div>
                <p class="shelf-item__title">{item.title}</p>
                <div class="shelf-item__price">
                    <div class="val"><small>{item.currencyFormat}</small><b>{item.price.toFixed(2)}</b></div>
                </div>
                <div class="shelf-item__buy-btn" onClick={()=>addCart(item)}>Add to cart</div>
            </div>
        );
    }
    addCart=(product)=>{
        this.props.addCart(product);
    }
}

export default ProductItem;
