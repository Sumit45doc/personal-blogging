import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query'
import { getPost } from '../../api'
import { get_post_response, get_posts } from '../../state/response_constant'

type Props = {
    postId: string,
    options?:
    Omit<UseQueryOptions<get_post_response, unknown, get_post_response, string[]>,
        'queryKey' | 'queryFn' | 'retry' | 'enabled' | 'initialData' | 'select'
    >
}

function useGetPost({ postId, options }: Props) {
    const queryClient = useQueryClient()

    return useQuery(
        [`post-${postId}`],
        () => getPost(postId),
        {
            retry: 2,
            enabled: !!postId,
            // @ts-ignore
            initialData: () => {
                const personalPosts = queryClient.getQueryData<get_posts>(['posts-personal'])
                const designPosts = queryClient.getQueryData<get_posts>(['posts-design'])
                if (personalPosts) {
                    const post = personalPosts.data.find(post => post._id === postId)
                    return { data: post }
                }
                else if (designPosts) {
                    const post = designPosts.data.find(post => post._id === postId)
                    return { data: post }
                } else return undefined
            },
            ...options
        },

    )
}

export default useGetPost