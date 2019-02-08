import React, { Component } from 'react';

class FilterSize extends Component {
    render() {
        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                {this.props.children}
            </div>
        );
    }
}
export default FilterSize;
