import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// login
export const LOGIN = (data) => API.post('/user/login', data);
// signup
export const SIGNUP = (data) => API.post('/user/signup', data);
// forget password
export const FORGETPASSWORD = (data) => API.post('/user/forget/password', data);