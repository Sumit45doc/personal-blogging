import BlogCard from './BlogCard'
import { get_post, get_posts_response } from '../../state/response_constant'
import useIsAdmin from '../../hooks/useIsAdmin'
import useNavigateEditPost from '../../hooks/useNavigateEditPost'
import useDeletePostFunc from '../../hooks/useDeletePostFunc'

type Props = {
    blogs: get_posts_response
    queryKey: string[]
}

function BlogContainer({ blogs, queryKey }: Props) {

    const isAdmin = useIsAdmin()
    const navigateEditPost = useNavigateEditPost()

    const { mutate: deletePost } = useDeletePostFunc(queryKey)

    const onDeletePost = (id: string) => {
        deletePost(id)
    }

    const onEditPost = (post: get_post) => {
        navigateEditPost(post)
    }

    return (
        <>
            {blogs?.data.map((blog) => <BlogCard
                {...blog}
                key={blog._id}
                isAdmin={isAdmin}
                onDeletePost={() => onDeletePost(blog._id)}
                onEditPost={() => onEditPost(blog)}
            />)}
        </>
    )
}

export default BlogContainer