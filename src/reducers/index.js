import {combineReducers} from 'redux';
import FilterReducer from './FilterReducer';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import SortReducer from './SortReducer';

const allReducer=combineReducers({
    filter: FilterReducer,
    products:   ProductReducer,
    cartInfo:   CartReducer,
    sort: SortReducer
})

export default allReducer;