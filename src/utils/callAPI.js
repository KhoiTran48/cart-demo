import axios from 'axios';
import {API_URL} from './../constants/Config';

const callApi=(method, endpoint, data)=>{
    return axios({
        method,
        url:`${API_URL}/${endpoint}`,
        data
    }).catch(err=>{
        console.log(err);
    })
}

export default callApi;