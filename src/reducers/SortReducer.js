import * as types from './../constants/ActionTypes';
var init={
    by:"",
    value:""
}

const SortReducer=(state=init, action)=>{
    switch (action.type) {
        case types.SORT_PRICE:
            state.by='price';
            state.value=action.value;
            return {...state};
        default:
            return {...state};
    }
}

export default SortReducer;