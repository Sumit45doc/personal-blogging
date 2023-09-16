function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const ROOTS_ADMIN = 'admin'

export const PATH_ADMIN = {
    root: ROOTS_ADMIN,
    createBlog: path(ROOTS_ADMIN, '/create-blog'),
    blogsList: path(ROOTS_ADMIN, '/blogs-list'),
    editBlog: (id: string) => path(ROOTS_ADMIN, `/${id}/edit`),
}

export const PATH_HOME = {
    root: '/',
    signUp: 'sign-up',
    signIn: 'sign-in',
    home: 'home',
    personalBlog: 'personal-blogs',
    designBlog: 'design-blogs',
    about: 'about',
    contact: 'contact',
    blog: (postId: string) => `blogs/${postId}`
}