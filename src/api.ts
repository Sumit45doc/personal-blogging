import axios from "axios";
import { api_constant } from "./state/api_constant";
import { localStorageConstant } from "./state/localstorage_constant";
import { get_popular_posts } from "./state/response_constant";

export const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem(localStorageConstant.AUTHTOKEN)
    if (token) {
        req.headers['x-auth-token'] = `Bearer ${JSON.parse(token)}`;
    }

    return req;
});


export const getPopularPosts = () => API.get<get_popular_posts>(api_constant.getPopularPosts)