import { useRoutes, Navigate } from "react-router-dom";
import { About, BlogsList, Contact, CreateBlog, DesignBlog, EditBlog, Home, PersonalBlog, Signin } from "./element";
import SignUp from "../pages/SignUp";
import RoleBasedGuard from "../components/shared/RoleBaseGuard";

export default function Router() {
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
        // admin
        {
            path: 'admin',
            element: <RoleBasedGuard roles={['admin']} />,
            children: [
                {
                    element: <Navigate to={'/admin/blogs-list'} replace  />,
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