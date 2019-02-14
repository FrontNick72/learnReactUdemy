import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-app-bad20.firebaseio.com/'
});

export default instance;