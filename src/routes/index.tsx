import { useRoutes, Navigate } from "react-router-dom";
import { About, Blog, BlogsList, Contact, CreateBlog, DesignBlog, EditBlog, Home, PersonalBlog, Signin } from "./element";
import SignUp from "../pages/SignUp";
import RoleBasedGuard from "../components/shared/RoleBaseGuard";
import { useEffect } from 'react'
import { localStorageConstant } from "../state/localstorage_constant";
import { isValidToken, setSession } from "../utils/jwt";
import { useDispatch } from "../redux/store";
import { logout } from "../redux/slice/user";

export default function Router() {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem(localStorageConstant.AUTHTOKEN)
        if (token && isValidToken(token)) {
            setSession(token, dispatch)
        } else {
            dispatch(logout())
        }
    }, [])


    return useRoutes([
        {
            path: 'sign-up',
            element: (
                <SignUp />
            )
        },
        {
            path: 'sign-in',
            element: (
                <Signin />
            )
        },
        {
            path: '/',
            children: [
                { element: <Navigate to={'home'} replace />, index: true },
                {
                    path: 'home',
                    element: (
                        <Home />
                    ),
                },
            ],
        },
        {
            path: 'personal-blogs',
            element: (
                <PersonalBlog />
            )
        },
        {
            path: 'design-blogs',
            element: (
                <DesignBlog />
            )
        },
        {
            path: 'about',
            element: (
                <About />
            )
        },
        {
            path: 'contact',
            element: (
                <Contact />
            )
        },
        {
            path: 'blogs',
            children: [
                {
                    element: <>Coming soon</>,
                    index: true
                },
                {
                    path: ':id',
                    element: <Blog />
                }
            ]
        },
        // admin
        {
            path: 'admin',
            element: <RoleBasedGuard roles={['admin']} />,
            children: [
                {
                    element: <Navigate to={'/admin/blogs-list'} replace />,
                    index: true
                },
                {
                    path: 'create-blog',
                    element: (
                        <CreateBlog />
                    )
                },
                {
                    path: 'blogs-list',
                    element: (
                        <BlogsList />
                    )
                },
                {
                    path: ':id/edit-blog',
                    element: <EditBlog />
                }
            ]
        }
    ]);
}