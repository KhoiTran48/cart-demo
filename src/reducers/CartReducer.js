import * as types from './../constants/ActionTypes';

var cartStorage=localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
var init={
    "showCart":false,
    "carts":cartStorage
}

const CartReducer=(state=init, action)=>{
    switch (action.type) {
        case types.TOGGLE_CART:
            state["showCart"]=!state["showCart"];
            return {...state};
        case types.ADD_CART:
            var product=action.product;
            var index=state.carts.findIndex((item, index)=>{
                return item.product.id === product.id ;
            })
            if(index >= 0){
                state.carts[index].quantity++;
            }else{
                state.carts.push({
                    product,
                    quantity:1
                })
            }
            state["showCart"]=true;
            localStorage.setItem('carts', JSON.stringify(state.carts));
            return {...state};
        case types.DELETE_CART:
            var id=action.id;
            var index=state.carts.findIndex((item, index)=>{
                return item.product.id === id ;
            })
            if(index >= 0){
                state.carts.splice(index,1);
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
            return {...state};
        default:
        return {...state};
    }
}
// console.log(init);
export default CartReducer;