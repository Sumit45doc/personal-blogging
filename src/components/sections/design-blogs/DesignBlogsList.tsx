import useGetPosts from '../../../hooks/query/useGetPosts'
import { calculateViewAmout } from '../../../utils'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import BlogCard from '../../shared/BlogCard'
import PostContainer from '../../shared/PostContainer'
import useIsAdmin from '../../../hooks/useIsAdmin'
import useDeletePostFunc from '../../../hooks/useDeletePostFunc'

function DesignBlogsList() {

    const { data, isLoading, isError, error } = useGetPosts('design')
    const isAdmin = useIsAdmin()

    const { mutate: deletePost } = useDeletePostFunc(["posts-design"])

    const onDeletePost = (id: string) => {
        deletePost(id)
    }

    if (isLoading) {
        return (
            <PostContainer>
                <LoadingBlogsCard noOfCard={3} />
            </PostContainer>
        )
    }

    if (isError) <>{JSON.stringify(error)}</>

    if (!data) return <>Something went wrong</>

    return (
        <PostContainer viewAmout={calculateViewAmout(data.data.length)}>
            {data?.data.map((blog) => <BlogCard
                {...blog}
                key={blog._id}
                isAdmin={isAdmin}
                onDeletePost={() => onDeletePost(blog._id)}
            />)}
        </PostContainer>
    )
}

export default DesignBlogsList