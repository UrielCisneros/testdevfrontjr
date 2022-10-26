import axios from 'axios';

const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL
})

export default clientAxios;