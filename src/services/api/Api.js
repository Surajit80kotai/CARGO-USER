import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// login
export const LOGIN = (data) => API.post('/user/login', data);
// signup
export const SIGNUP = (data) => API.post('/user/signup', data);
// forget password
export const FORGETPASSWORD = (data) => API.post('/user/forget/password', data);
// search flights
export const SEARCHFLIGHTS = (data, header) => API.post('/user/search/flights', data, header);
// get all flight
export const GETALLFLIGHTS = () => API.get('/all/flight');
// all airline
export const ALLAIRLINE = () => API.get('/system/all/airline');
// all category
export const GETALLCATEGORYPRICE = () => API.get('/all/category/price');