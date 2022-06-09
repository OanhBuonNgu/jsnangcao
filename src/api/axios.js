//nơi cấu hình base cho axios
import axios from 'axios';


const apiAxios = axios.create({
    baseURL: 'https://6291d302cd0c91932b688d55.mockapi.io'
});

export default apiAxios;