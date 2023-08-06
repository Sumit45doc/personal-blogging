import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/shared/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export const Home = Loadable(lazy(() => import('../pages/Home')));
export const PersonalBlog = Loadable(lazy(() => import('../pages/PersonalBlog')));
export const DesignBlog = Loadable(lazy(() => import('../pages/DesignBlog')));
export const About = Loadable(lazy(() => import('../pages/About')));
export const Contact = Loadable(lazy(() => import('../pages/Contact')));
export const Signup = Loadable(lazy(() => import('../pages/SignUp')))
export const Signin = Loadable(lazy(() => import('../pages/SignIn')))

// admin
export const BlogsList = Loadable(lazy(() => import('../pages/admin/BlogsList')))
export const CreateBlog = Loadable(lazy(() => import('../pages/admin/CreateBlog')))
export const EditBlog = Loadable(lazy(() => import('../pages/admin/EditBlog')))