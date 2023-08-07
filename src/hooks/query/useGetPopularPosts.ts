import { useQuery } from '@tanstack/react-query'
import { getPopularPosts } from '../../api'

function useGetPopularPosts() {
  return useQuery({
    queryKey: ['popular-posts'],
    queryFn: () => getPopularPosts(),
    retry: 1
  })
}

export default useGetPopularPosts