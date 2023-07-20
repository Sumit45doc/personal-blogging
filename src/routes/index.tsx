import { useRoutes, Navigate } from "react-router-dom";
import { About, Contact, DesignBlog, Home, PersonalBlog } from "./element";
import MainHeader from "../components/shared/layout/MainHeader";

export default function Router() {
    return useRoutes([
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
        }
    ]);
}