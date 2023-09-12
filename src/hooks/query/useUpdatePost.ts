import { useMutation } from '@tanstack/react-query'
import { updatePost } from '../../api'
import { get_post } from '../../state/response_constant'

type OnSuccess = (data: get_post) => void
type OnError = (error: Error) => void

type Props = {
    onSuccess?: OnSuccess,
    onError?: OnError
}

function useUpdatePost({ onSuccess, onError }: Props) {
    return useMutation(
        (payload: { id: string, data: FormData, shouldUpdateImage: boolean }) => updatePost(payload.id, payload.data, payload.shouldUpdateImage),
        {
            onSuccess,
            onError
        }
    )
}

export default useUpdatePost