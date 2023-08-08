import { useQuery } from '@tanstack/react-query'
import { getLatestPosts } from '../../api'

function useGetLatestPosts() {
  return useQuery({
    queryKey: ['latest-posts'],
    queryFn: () => getLatestPosts(),
    retry: 1
  })
}

export default useGetLatestPosts