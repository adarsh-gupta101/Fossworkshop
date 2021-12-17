import axios from 'axios';

const instance = axios.create({
    baseURL: "https://colleges-in.herokuapp.com",
});

export default instance;