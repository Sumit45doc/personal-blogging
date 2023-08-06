import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { get_user } from '../../state/response_constant';

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
    initialState,
    reducers: {
        addUser(state, action) {
            state = action.payload
        },
        removeUser(state) {
            state = initialState
        },
        editUser(state, action) {
            state = { ...state, ...action.payload }
        }
    }
})

const { addUser, editUser, removeUser } = slice.actions

// Reducer
export default slice.reducer;


export function auth(user: get_user) {
    return (dispatch: Dispatch) => {
        if (localStorage) {
            dispatch(addUser(user))
        } else {
            console.error('localstorage not available')
        }
    }
}

export function logout(){
    return (dispatch: Dispatch) => {
        dispatch(removeUser())
    }
}