import { useMutation } from '@tanstack/react-query'
import { post_create_blog } from '../../state/request_constant'
import { createPost } from '../../api'
import { get_post } from '../../state/response_constant'

type OnSuccess = (data: get_post) => void
type OnError = (error: Error) => void

type Props = {
  onSuccess?: OnSuccess,
  onError?: OnError
}

function usePostCreateBlog({ onSuccess, onError }: Props) {
  return useMutation(
    (payload: post_create_blog) => createPost(payload),
    {
      onSuccess,
      onError
    }
  )
}

export default usePostCreateBlog