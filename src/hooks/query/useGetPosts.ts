import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../api'
import { get_posts_request } from '../../state/request_constant'

function useGetPosts(type: get_posts_request) {
    return useQuery({
        queryKey: [`posts-${type}`],
        queryFn: () => getPosts(type),
        retry: 1
      })
}

export default useGetPosts