export type post_create_blog = {
    title: string,
    description: string,
    type: 'personal' | 'design',
    selectedFile: string
}

export type post_update_blog = post_create_blog

export type post_signin = {
    email: string,
    password: string
}

export type post_signup = {
    firstName: string;
    lastName: string;
    email: string;
    password: string,
}