export type api_error = {
    error: string
}

export type get_popular_posts = {
    title: string,
    _id: string,
    selectedFile: string,
    type: 'personal' | 'design',
    likes: string[],
    count: number
}[]