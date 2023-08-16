import useGetPopularPosts from '../../../hooks/query/useGetPopularPosts'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'
import BlogContainer from '../../shared/BlogContainer'

function PopularPost() {
    const { data, isLoading, isError, error } = useGetPopularPosts()


    if (isLoading) {
        return (
            <PostContainer title={'POPULAR POSTS'}>
                <LoadingBlogsCard noOfCard={3} />
            </PostContainer>
        )
    }

    if (isError) <>{JSON.stringify(error)}</>

    if (!data) return <>Something went wrong</>

    return (
        <PostContainer title={'POPULAR POSTS'}>
            <BlogContainer blogs={data} queryKey={["popular-posts"]} />
        </PostContainer>
    )
}


export default PopularPost