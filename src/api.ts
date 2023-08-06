import axios from "axios";
import { api_constant } from "./state/api_constant";
import { localStorageConstant } from "./state/localstorage_constant";
import { delete_post, get_latest_posts, get_popular_posts, get_post, get_user_response, update_like_post, update_view_post } from "./state/response_constant";
import { post_create_blog, post_signin, post_signup, post_update_blog } from "./state/request_constant";

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

// get post
export const getPopularPosts = () => API.get<get_popular_posts>(api_constant.getPopularPosts)
export const getLatestPosts = () => API.get<get_latest_posts>(api_constant.getLatestPost)

// CUD operation
export const createPost = (data: post_create_blog): Promise<get_post> => API.post(api_constant.createPost, data)
export const updatePost = (id: string, data: post_update_blog): Promise<get_post> => API.post(api_constant.editPost(id), data)
export const deletePost = (id: string): Promise<delete_post> => API.delete(api_constant.deletePost(id))

// analytics
export const incrementViewPost = (id: string): Promise<update_view_post> => API.patch(api_constant.incrementViewPost(id))
export const likePost = (id: string): Promise<update_like_post> => API.patch(api_constant.likePost(id))


// auth
export const signin = (data: post_signin): Promise<get_user_response> => API.post(api_constant.signin, data)
export const signup = (data: post_signup): Promise<get_user_response> => API.post(api_constant.signup, data)