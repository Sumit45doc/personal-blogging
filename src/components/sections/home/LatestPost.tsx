import PostContainer from '../../shared/PostContainer'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import useGetLatestPosts from '../../../hooks/query/useGetLatestPosts'

function LatestPost() {

    const { data, isLoading, isError, error } = useGetLatestPosts()

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
            {data?.data.map((blog) => <BlogCard {...blog} key={blog._id} />)}
        </PostContainer>
    )
}

export default LatestPost