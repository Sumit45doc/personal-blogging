export type api_error = {
    error: string
}

export type get_popular_post = {
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

export type get_popular_posts = { data: get_popular_post[] }