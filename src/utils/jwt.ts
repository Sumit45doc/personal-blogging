import jwtDecode from 'jwt-decode';
import { API } from '../api';
import { Dispatch } from '@reduxjs/toolkit';
import { logout } from '../redux/slice/user';

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
    if (!accessToken) {
        return false;
    }
    const decoded = jwtDecode<{ exp: number }>(accessToken);

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number, dispatch: Dispatch) => {
    const currentTime = Date.now();

    // Test token expires after 10s
    // const timeLeft = currentTime + 10000 - currentTime; // ~10s
    const timeLeft = exp * 1000 - currentTime;
    setTimeout(() => {
        // @ts-ignore
        dispatch(logout())
    }, timeLeft);
};

const setSession = (accessToken: string | null, dispatch: Dispatch) => {
    if (accessToken) {
        API.interceptors.request.use((req) => {
            req.headers['x-auth-token'] = `Bearer ${accessToken}`;
            return req
        });

        // This function below will handle when token is expired
        const { exp } = jwtDecode<{ exp: number }>(accessToken)
        handleTokenExpired(exp, dispatch);
    } else {
        // @ts-ignore
        dispatch(logout())
    }
};

export { isValidToken, setSession };