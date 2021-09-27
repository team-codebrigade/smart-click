import axios from "axios";

const url = 'https://smart--click.herokuapp.com';

export const sendInfo = (contactInfo) => axios.post(`${url}/contact`, contactInfo);
export const searchLocation = (location) => axios.get(`${url}/search`, {params: {key: location}});
export const registerParking = (userInfo) => axios.post(`${url}/register`, userInfo);