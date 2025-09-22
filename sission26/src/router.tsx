/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRouter from './pages/PrivateRoute'
import LoadingSpin from './LoadingSpin'
const App = React.lazy(() => import('./App'))
const Product = React.lazy(() => import('./pages/Product'))
const Student = React.lazy(() => import('./pages/Student'))
const Account = React.lazy(() => import('./pages/Account'))
const Login = React.lazy(() => import('./pages/Login'))
const Team = React.lazy(() => import('./pages/Team'))
const Teams = React.lazy(() => import('./pages/Teams'))
const TeamsIndex = React.lazy(() => import('./pages/TeamsIndex'))





export const router = createBrowserRouter([
    {
        path: '/', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><App></App></Suspense>), children: [
            {
                path: 'product', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Product></Product></Suspense>), children: [
                    { path: ':id', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Product></Product></Suspense>) }
                ]
            },
            {
                path: 'student', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Student></Student></Suspense>), children: [
                    { path: ':name', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Student></Student></Suspense>) }
                ]
            },
            { path: "login", element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Login></Login></Suspense>) },
            {
                path: "account",
                element: (
                    (<Suspense fallback={<LoadingSpin></LoadingSpin>}>
                        <PrivateRouter>
                            <Account />
                        </PrivateRouter></Suspense>)
                ),
            },
            {
                path: 'teams', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Teams></Teams></Suspense>), children: [
                    { index: true, element:(<Suspense fallback={<LoadingSpin></LoadingSpin>}><TeamsIndex></TeamsIndex></Suspense>) },
                    { path: ':teamId', element: (<Suspense fallback={<LoadingSpin></LoadingSpin>}><Team></Team></Suspense>) }
                ]
            }
        ]
    }
])
