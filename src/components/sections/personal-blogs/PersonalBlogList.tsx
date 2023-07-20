import { calculateViewAmout } from '../../../utils'
import BlogCard from '../../shared/BlogCard'
import PostContainer from '../../shared/PostContainer'

function PersonalBlogList() {
    const array = [...Array(3)]
    return (
        <PostContainer viewAmout={calculateViewAmout(array.length)}>
            {array.map((_, i) => <BlogCard key={i} />)}
        </PostContainer>
    )
}

export default PersonalBlogList