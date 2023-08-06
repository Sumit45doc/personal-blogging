
const POST = '/post'
const AUTH = '/auth'

export const api_constant = {
    getPopularPosts: `${POST}/get-popular-post`,
    getLatestPost: `${POST}/get-latest-post`,
    createPost: `${POST}/create`,
    editPost: (id: string) => `${POST}/update-post/${id}`,
    deletePost: (id: string) => `${POST}/delete-post/${id}`,
    incrementViewPost: (id: string) => `${POST}/update-count/${id}`,
    likePost: (id: string) => `${POST}/like/${id}`,

    // auth
    signin: `${AUTH}/signin`,
    signup: `${AUTH}/signup`
}