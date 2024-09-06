import { lazy, Suspense } from 'react';
import Loader from 'components/Loader';
import MainLayout from '../layout/MainLayout';
import AuthGuard from 'utils/authguard';

const LoginPage = lazy(() => import('../views/Pages/Login'));
const DiscordLogin = lazy(() => import('../views/Pages/Discord'));
const CollaboardPage = lazy(() => import('../views/Collaboard'));
const RequestAccess = lazy(() => import('../views/Collaboard/request'));
const RequestBot = lazy(() => import('../views/Collaboard/bot'));
const RequestSuccessfull = lazy(() => import('../views/Collaboard/successfull'));
const AddProject = lazy(() => import('../views/Collaboard/addProject'));
const MyProject = lazy(() => import('../views/Collaboard/myProject'));
const MyCollabs = lazy(() => import('../views/Collaboard/myCollabs'));
const ApplyCollabs = lazy(() => import('../views/Collaboard/applyCollabs'));
const EditCollabs = lazy(() => import('../views/Collaboard/EditCollabs'));
const EngagePage = lazy(() => import('../views/Engage'));
const NewCampaign = lazy(() => import('../views/Engage/newCampaign'));
const ProfilePage = lazy(() => import('../views/Profile'));
const ErrorPage = lazy(() => import('../views/Error'));

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                <Suspense fallback={<Loader />}>
                    <LoginPage />
                </Suspense>
            )
        },
        {
            path: '/discord',
            element: (
                <Suspense fallback={<Loader />}>
                    <DiscordLogin />
                </Suspense>
            )
        },
        {
            path: '/dashboard',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <MyCollabs />
                            </AuthGuard>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: '/collab',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <CollaboardPage />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'request',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <RequestAccess />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'request_bot',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <RequestBot />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'successfull',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <RequestSuccessfull />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'add_project',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <AddProject />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'my_projects',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <MyProject />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'my_collabs',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <MyCollabs />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: ':id',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <ApplyCollabs />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'edit_collab/:id',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <EditCollabs />
                            </AuthGuard>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: '/engage',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <EngagePage />
                            </AuthGuard>
                        </Suspense>
                    )
                },
                {
                    path: 'new_campaign',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <NewCampaign />
                            </AuthGuard>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: '/profile',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AuthGuard>
                                <ProfilePage />
                            </AuthGuard>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: '*',
            element: (
                <Suspense fallback={<Loader />}>
                    <ErrorPage />
                </Suspense>
            )
        }
    ]
};

export default MainRoutes;
