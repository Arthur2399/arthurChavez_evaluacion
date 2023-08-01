import axios from 'axios';
import { getEnvironments } from '../helpers';

const { VITE_API_URL } = getEnvironments();

//axios configuration with API address
export const apiConfig = axios.create({
    baseURL: VITE_API_URL
});
