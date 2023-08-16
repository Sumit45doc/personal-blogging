import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '../../api'
import { delete_post, get_popular_posts } from '../../state/response_constant'

type OnSuccess = (data: delete_post) => void
type OnError = (error: Error) => void

type Props = {
    onSuccess?: OnSuccess,
    onError?: OnError,
    queryKey: string[]
}

function useDeletePost({ onSuccess, onError, queryKey }: Props) {
    const queryClient = useQueryClient()
    return useMutation(
        (id: string) => deletePost(id),
        {
            onMutate: async (id) => {
                // Cancel any outgoing refetches
                // (so they don't overwrite our optimistic update)
                await queryClient.cancelQueries({ queryKey })

                // Snapshot the previous value
                const previousPosts = queryClient.getQueryData(queryKey)
                
                // Optimistically update to the new value
                const reStoreVal = (old: get_popular_posts | undefined): get_popular_posts | undefined => {
                    if(!old) return undefined;
                    return ({ data: old.data.filter(post => post._id !== id) })
                }

                queryClient.setQueryData(queryKey, (old: get_popular_posts | undefined) => reStoreVal(old))

                // Return a context object with the snapshotted value
                return { previousPosts }
            },
            // If the mutation fails,
            // use the context returned from onMutate to roll back
            onError: (err: Error, _newPost, context) => {
                queryClient.setQueryData(queryKey, context?.previousPosts)
                if(!!onError) onError(err)
            },
            onSuccess,
        }
    )
}

export default useDeletePost