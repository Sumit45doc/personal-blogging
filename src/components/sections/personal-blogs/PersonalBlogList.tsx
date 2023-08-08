import useGetPosts from '../../../hooks/query/useGetPosts'
import { calculateViewAmout } from '../../../utils'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'

function PersonalBlogList() {

    const { data, isLoading, isError, error } = useGetPosts('personal')

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

export default PersonalBlogList