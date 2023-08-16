import useGetPosts from '../../../hooks/query/useGetPosts'
import { calculateViewAmout } from '../../../utils'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'
import BlogContainer from '../../shared/BlogContainer'

function DesignBlogsList() {

    const { data, isLoading, isError, error } = useGetPosts('design')

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
            <BlogContainer blogs={data} queryKey={["posts-design"]} />
        </PostContainer>
    )
}

export default DesignBlogsList