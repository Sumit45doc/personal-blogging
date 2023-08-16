import { get_post } from '../state/response_constant'
import { useNavigate } from 'react-router-dom'

function useNavigateEditPost() {
    const navigate = useNavigate()

    const navigateToEdit = (post: get_post) => {
        return navigate(`/admin/${post._id}/edit-blog`, { state: post })
    }

    return navigateToEdit
}

export default useNavigateEditPost