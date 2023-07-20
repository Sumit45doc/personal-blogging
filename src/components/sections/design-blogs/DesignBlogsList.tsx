import { calculateViewAmout } from '../../../utils'
import BlogCard from '../../shared/BlogCard'
import PostContainer from '../../shared/PostContainer'

function DesignBlogsList() {
    const array = [...Array(10)]
    return (
        <PostContainer viewAmout={calculateViewAmout(array.length)}>
            {array.map((_, i) => <BlogCard key={i} />)}
        </PostContainer>
    )
}

export default DesignBlogsList