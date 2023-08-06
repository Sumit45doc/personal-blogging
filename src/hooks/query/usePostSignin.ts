import { useMutation } from '@tanstack/react-query'
import { post_signin } from '../../state/request_constant'
import { signin } from '../../api'
import { get_user } from '../../state/response_constant'

type OnSuccess = (data: get_user) => void
type OnError = (error: Error) => void

type Props = {
  onSuccess?: OnSuccess,
  onError?: OnError
}

function usePostSignin({ onSuccess, onError }: Props) {
  return useMutation(
    (payload: post_signin) => signin(payload),
    {
      onSuccess,
      onError
    }
  )
}

export default usePostSignin