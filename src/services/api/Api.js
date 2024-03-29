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
// save booking details
export const SAVEBOOKINGDETAILS = (data, header) => API.post('/save/booking/details', data, header);
// booking details share/via/email
export const SHAREBOOKINGVIAEMAIL = (data, header) => API.post('/share/via/email', data, header);
// booking
export const BOOKING = (data, header) => API.post('/take/booking', data, header);
// delete file
export const DELETEFILE = (data) => API.post('/delete/file', data);