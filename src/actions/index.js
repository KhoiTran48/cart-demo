import * as types from './../constants/ActionTypes';
import callApi from './../utils/callAPI';

export const FETCH_PRODUCT_REQUEST=()=>{
    return (dispatch)=>{
        return callApi('GET', 'products', null).then(res=>{
            dispatch(FETCH_PRODUCT(res.data))
        })
    }
}

export const FETCH_PRODUCT=()=>{
    return {
        type:types.FETCH_PRODUCT
    }
}

export const CHANGE_FILTER=(filterSize)=>{
    return {
        type:types.CHANGE_FILTER,
        filterSize
    }
}
export const ADD_CART=(product)=>{
    return {
        type:types.ADD_CART,
        product
    }
}
export const EDIT_CART=(product)=>{
    return {
        type:types.EDIT_CART,
        product
    }
}
export const DELETE_CART=(id)=>{
    return {
        type:types.DELETE_CART,
        id
    }
}

export const TOGGLE_CART=()=>{
    return {
        type:types.TOGGLE_CART
    }
}

export const CHECKOUT=()=>{
    return {
        type:types.CHECKOUT
    }
}

export const CLOSE_CART=()=>{
    return {
        type:types.CLOSE_CART
    }
}

export const SORT_PRICE=(value)=>{
    return {
        type:types.SORT_PRICE,
        value
    }
}

