import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './app.css';

import { Suspense, lazy } from 'react';

const BaseLayout = lazy(() => import('../components/route/layout/baseLayout'));
const NotFound = lazy(() => import('../pages/notFound/notFound'));
const SignIn = lazy(() => import('../pages/signIn/signIn'));
const SignUp = lazy(() => import('../pages/signUp/signUp'));
const Todo = lazy(() => import('../pages/todo/todo'));

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <BaseLayout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: '/',
                    element: <>main</>,
                },
                {
                    path: '/signin',
                    element: <SignIn />,
                },
                {
                    path: '/signup',
                    element: <SignUp />,
                },
                {
                    path: '/todos',
                    element: <Todo />,
                },
            ],
        },
    ]);
    return (
        <div>
            <Suspense>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};

export default App;
