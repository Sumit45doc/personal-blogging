import PostContainer from '../../shared/PostContainer'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import useGetLatestPosts from '../../../hooks/query/useGetLatestPosts'
import BlogContainer from '../../shared/BlogContainer'

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
             <BlogContainer blogs={data} queryKey={["latest-posts"]} />
        </PostContainer>
    )
}

export default LatestPost