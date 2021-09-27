import axios from "axios";

const url = 'http://localhost:5000';

export const sendInfo = (contactInfo) => axios.post(`${url}/contact`, contactInfo);
export const searchLocation = (location) => axios.get(`${url}/search`, {params: {key: location}});
export const registerParking = (userInfo) => axios.post(`${url}/register`, userInfo);