import { delete_post } from '../state/response_constant'
import { Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import useDeletePost from './query/useDeletePost'

function useDeletePostFunc(queryKey: string[]) {
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

    return useDeletePost({ onSuccess: handlePostDeletionSuccess, onError: handlePostDeletionError, queryKey })
}

export default useDeletePostFunc