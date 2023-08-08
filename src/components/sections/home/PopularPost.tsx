import useGetPopularPosts from '../../../hooks/query/useGetPopularPosts'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'

function PopularPost() {
    const { data, isLoading, isError, error } = useGetPopularPosts()

    if (isLoading) {
        return (
            <PostContainer title={'POPULAR POSTS'}>
                <LoadingBlogsCard noOfCard={3} />
            </PostContainer>
        )
    }

    if(isError) <>{JSON.stringify(error)}</>

    if(!data) return <>Something went wrong</>

    return (
        <PostContainer title={'POPULAR POSTS'}>
            {data?.data.map((blog) => <BlogCard {...blog} key={blog._id} />)}
        </PostContainer>
    )
}


export default PopularPost