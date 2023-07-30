// import useGetPopularPosts from '../../../hooks/query/useGetPopularPosts'
import BlogCard from '../../shared/BlogCard'
// import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'

function PopularPost() {
    // const { data } = useGetPopularPosts()

    return (
        <PostContainer title={'POPULAR POSTS'}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            {/* <LoadingBlogsCard /> */}
        </PostContainer>
    )
}


export default PopularPost