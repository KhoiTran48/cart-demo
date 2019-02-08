import * as types from './../constants/ActionTypes';

var initial={
    sizes:['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
    filterItems:[]
}

const FilterReducer=(state=initial, action)=>{
    switch (action.type) {
        case types.CHANGE_FILTER:
            var tmp=state.filterItems;
            var filterItem=action.filterSize;
            if(tmp.includes(filterItem)){
                tmp.splice( tmp.indexOf(filterItem), 1 );
            }else{
                tmp.push(filterItem);
            }
            state.filterItems=tmp;
            return {...state};
        default:
            return {...state};
    }
}

export default FilterReducer;