export type api_error = {
    error: string
}

export type get_post = {
    title: string,
    _id: string,
    selectedFile: string,
    description: string,
    type: 'personal' | 'design',
    likes: string[],
    count: number,
    createdAt: Date,
    updatedAt: Date
}

// popular post
export type get_popular_post = get_post

export type get_popular_posts = { data: get_popular_post[] }

// Latest post
export type get_latest_post = get_post
export type get_latest_posts = { data: get_latest_post[] }

// delete post
export type delete_post = { data: string }

//update view
export type update_view_post = { data: string }

// like post
export type update_like_post = { data: string }


// get user
export type get_user = {
    _id: string,
    name: string,
    email: string,
    role: string,
    createdAt: string,
    updatedAt: string
}

// get user api response
export type get_user_response = {
    data: { data: get_user },
    headers: { 'x-auth-token': string }
}

// get post 
export type get_posts = {
    data: get_post[]
}