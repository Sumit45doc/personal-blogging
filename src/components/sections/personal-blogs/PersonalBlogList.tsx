import useGetPosts from '../../../hooks/query/useGetPosts'
import { calculateViewAmout } from '../../../utils'
import BlogContainer from '../../shared/BlogContainer'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'

function PersonalBlogList() {

    const { data, isLoading, isError, error } = useGetPosts('personal')

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
           <BlogContainer blogs={data} queryKey={["posts-personal"]} />
        </PostContainer>
    )
}

export default PersonalBlogList