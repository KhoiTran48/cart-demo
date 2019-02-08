import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        var {header}=this.props;
        // console.log(this.props.children);
        return (
        <div class="shelf-container">
            {/* header */}
            {header}
            {/* product items */}
            {this.props.children}
            <div class="clearfix"></div>
        </div>
        );
    }
}

export default ProductList;
