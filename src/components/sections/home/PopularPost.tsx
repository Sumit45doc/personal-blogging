import BlogCard from '../../shared/BlogCard'
import PostContainer from '../../shared/PostContainer'

function PopularPost() {
    return (
        <PostContainer title={'POPULAR POSTS'}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </PostContainer>
    )
}


export default PopularPost