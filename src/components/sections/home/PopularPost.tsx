import { useSnackbar } from 'notistack'
import useDeletePost from '../../../hooks/query/useDeletePost'
import useGetPopularPosts from '../../../hooks/query/useGetPopularPosts'
import useIsAdmin from '../../../hooks/useIsAdmin'
import BlogCard from '../../shared/BlogCard'
import LoadingBlogsCard from '../../shared/LoadingBlogsCard'
import PostContainer from '../../shared/PostContainer'
import { Typography } from '@mui/material'
import { delete_post } from '../../../state/response_constant'

function PopularPost() {
    const { data, isLoading, isError, error } = useGetPopularPosts()
    const isAdmin = useIsAdmin()
    const { enqueueSnackbar } = useSnackbar()

    // DELETE BLOG
    const handlePostDeletionSuccess = (data: delete_post) => {
        enqueueSnackbar(<Typography>{data.message}</Typography>, {
            variant: 'success',
            autoHideDuration: 1000
        })
    }

    const handlePostDeletionError = () => {
        enqueueSnackbar(<Typography>Not able to Delete post. Something went wrong</Typography>, {
            variant: 'error',
            autoHideDuration: 2000
        })
    }
    
    const { mutate: deletePost } = useDeletePost({ onSuccess: handlePostDeletionSuccess, onError: handlePostDeletionError, queryKey: ["popular-posts"] })

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