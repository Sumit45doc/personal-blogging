import useGetPosts from '../../../hooks/query/useGetPosts'
import useDeletePostFunc from '../../../hooks/useDeletePostFunc'
import useIsAdmin from '../../../hooks/useIsAdmin'
import { calculateViewAmout } from '../../../utils'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'

function PersonalBlogList() {

    const { data, isLoading, isError, error } = useGetPosts('personal')
    const isAdmin = useIsAdmin()

    const { mutate: deletePost } = useDeletePostFunc(["posts-personal"])

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

export default PersonalBlogList