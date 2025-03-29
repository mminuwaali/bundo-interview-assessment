import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const instance = axios.create({ baseURL });

// request interceptors
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// respone interceptors
instance.interceptors.response.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export { baseURL };
export default instance;
