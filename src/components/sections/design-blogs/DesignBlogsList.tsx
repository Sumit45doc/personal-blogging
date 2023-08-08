import useGetPosts from '../../../hooks/query/useGetPosts'
import { calculateViewAmout } from '../../../utils'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import BlogCard from '../../shared/BlogCard'
import PostContainer from '../../shared/PostContainer'

function DesignBlogsList() {

    const { data, isLoading, isError, error } = useGetPosts('design')

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
        <PostContainer viewAmout={calculateViewAmout(data.data.length)}>
            {data?.data.map((blog) => <BlogCard {...blog} key={blog._id} />)}
        </PostContainer>
    )
}

export default DesignBlogsList