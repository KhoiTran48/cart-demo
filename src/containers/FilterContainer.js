import React, { Component } from 'react';
import FilterItem from './../components/filter/FilterItem';
import FilterSize from './../components/filter/FilterSize';
import {connect} from 'react-redux';

import * as actions from './../actions/index';

class FilterContainer extends Component {
    render() {
        var {sizes}=this.props;
        var filterItems=this.showFilterItem(sizes);
        return (
            <FilterSize>
                {filterItems}
            </FilterSize>
        );
    }
    showFilterItem=(sizes)=>{
        var {onChangeFilter}=this.props;
        var result= null;
        if(sizes.length >0){
            result=sizes.map((item, index)=>{
                return (
                    <FilterItem
                      key={index}
                      size={item}
                      onChangeFilter={onChangeFilter}
                    />
                )
            })
        }
        return result;
    }
}
const mapState=(state)=>{
    return {
        sizes:state.filter.sizes
    }
}
const mapDispatch=(dispatch,props)=>{
    return {
        onChangeFilter:(filterSize)=>{
            dispatch(actions.CHANGE_FILTER(filterSize));
        }
    }
}

export default connect(mapState, mapDispatch)(FilterContainer);
