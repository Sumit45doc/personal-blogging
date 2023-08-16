import useGetPopularPosts from '../../../hooks/query/useGetPopularPosts'
import useIsAdmin from '../../../hooks/useIsAdmin'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'

import useDeletePostFunc from '../../../hooks/useDeletePostFunc'

function PopularPost() {
    const { data, isLoading, isError, error } = useGetPopularPosts()
    const isAdmin = useIsAdmin()

    const { mutate: deletePost } = useDeletePostFunc(["popular-posts"])

    const onDeletePost = (id: string) => {
        deletePost(id)
    }

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
            {data?.data.map((blog) => <BlogCard {...blog} key={blog._id} isAdmin={isAdmin} onDeletePost={() => onDeletePost(blog._id)} />)}
        </PostContainer>
    )
}


export default PopularPost