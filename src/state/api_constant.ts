import { get_posts_request } from "./request_constant"

const POST = '/post'
const AUTH = '/auth'

export const api_constant = {
    getPost: (id: string) => `${POST}/get-post/${id}`,
    getPosts: (type: get_posts_request) => `${POST}/get-posts/${type}`,
    getPopularPosts: `${POST}/get-popular-post`,
    getLatestPost: `${POST}/get-latest-post`,
    createPost: `${POST}/create`,
    editPost: (id: string, shouldUpdateImage: boolean) => `${POST}/update-post/${id}?shouldUpdateImage=${shouldUpdateImage}`,
    deletePost: (id: string) => `${POST}/delete-post/${id}`,
    incrementViewPost: (id: string) => `${POST}/update-count/${id}`,
    likePost: (id: string) => `${POST}/like/${id}`,

    // auth
    signin: `${AUTH}/signin`,
    signup: `${AUTH}/signup`
}