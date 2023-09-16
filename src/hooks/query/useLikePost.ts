import { useMutation } from '@tanstack/react-query'
import { likePost } from '../../api'
import { update_like_post } from '../../state/response_constant'

type OnSuccess = (data: update_like_post) => void
type OnError = (error: Error) => void

type Props = {
    onSuccess?: OnSuccess,
    onError?: OnError
}

function useLikePost({ onSuccess, onError }: Props) {
    return useMutation(
        (blogId: string) => likePost(blogId),
        {
            onSuccess,
            onError
        }
    )
}

export default useLikePost