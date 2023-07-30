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


// admin
export const CreatePost = Loadable(lazy(() => import('../pages/admin/CreatePost')))