import PostContainer from '../../shared/PostContainer'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import useGetLatestPosts from '../../../hooks/query/useGetLatestPosts'
import useIsAdmin from '../../../hooks/useIsAdmin'
import useDeletePostFunc from '../../../hooks/useDeletePostFunc'

function LatestPost() {

    const { data, isLoading, isError, error } = useGetLatestPosts()
    const isAdmin = useIsAdmin()


    const { mutate: deletePost } = useDeletePostFunc(["latest-posts"])

    const onDeletePost = (id: string) => {
        deletePost(id)
    }

    if (isLoading) {
        return (
            <PostContainer title={'LATEST POSTS'}>
                <LoadingBlogsCard noOfCard={3} />
            </PostContainer>
        )
    }

    if (isError) <>{JSON.stringify(error)}</>

    if (!data) return <>Something went wrong</>

    return (
        <PostContainer title="LATEST POSTS">
            {data?.data.map((blog) => <BlogCard
                {...blog}
                key={blog._id}
                isAdmin={isAdmin}
                onDeletePost={() => onDeletePost(blog._id)}
            />)}
        </PostContainer>
    )
}

export default LatestPost