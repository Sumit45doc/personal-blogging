import { useSelector } from '../redux/store'

function useIsAdmin() {
    const user = useSelector(state => state.user)
    return user.role === 'admin'
}

export default useIsAdmin