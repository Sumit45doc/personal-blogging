import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { get_user } from '../../state/response_constant';
import { localStorageConstant } from '../../state/localstorage_constant';
import { API } from '../../api';
import { isValidToken, setSession } from '../../utils/jwt';


let userInitialValue = null;
if (typeof window !== 'undefined') {
    const user = localStorage.getItem(localStorageConstant.USER)
    if (user) {
        userInitialValue = JSON.parse(user);
    }
}



const initialState: get_user = {
    _id: '',
    name: '',
    email: '',
    role: '',
    createdAt: '',
    updatedAt: ''
}

const slice = createSlice({
    name: 'user',
    initialState: userInitialValue ?? initialState,
    reducers: {
        addUser(_state, action) {
            return action.payload as get_user
        },
        removeUser(_state) {
            return initialState as get_user
        },
        editUser(state, action) {
            return { ...state, ...action.payload }
        }
    }
})

const { addUser, editUser, removeUser } = slice.actions

// Reducer
export default slice.reducer;


export function auth(user: get_user, token: string) {
    return (dispatch: Dispatch) => {
        if (localStorage) {
            if (token && isValidToken(token)) {
                localStorage.setItem(localStorageConstant.AUTHTOKEN, JSON.stringify(token))
                localStorage.setItem(localStorageConstant.USER, JSON.stringify(user))
                dispatch(addUser(user))
                setSession(token, dispatch)
            } else {
                console.error('token expired')
            }
        } else {
            console.error('localstorage not available')
        }
    }
}

export function logout() {
    return (dispatch: Dispatch) => {
        const token = localStorage.getItem(localStorageConstant.AUTHTOKEN)
        const user = localStorage.getItem(localStorageConstant.USER)
        if (token && user) {
            localStorage.removeItem(localStorageConstant.AUTHTOKEN)
            localStorage.removeItem(localStorageConstant.USER)
            API.interceptors.request.use((req) => {
                delete req.headers['x-auth-token']
                return req
            });
        }
        dispatch(removeUser())
    }
}