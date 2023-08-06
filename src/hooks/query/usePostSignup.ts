import { useMutation } from '@tanstack/react-query'
import { post_signup } from '../../state/request_constant'
import { signup } from '../../api'
import { get_user_response } from '../../state/response_constant'

type OnSuccess = (data: get_user_response) => void
type OnError = (error: Error) => void

type Props = {
    onSuccess?: OnSuccess,
    onError?: OnError
}

function usePostSignup({ onSuccess, onError }: Props) {
    return useMutation(
        (payload: post_signup) => signup(payload),
        {
            onSuccess,
            onError
        }
    )
}

export default usePostSignup