import axios from "axios";

export const apiRequest = axios.create({
    baseURL: 'http://localhost:3001/api/v1'
})