import { RouteObject } from 'react-router-dom';
import UserList from './pages/List';
import UserCreate from './pages/Create';
import UserEdit from './pages/Edit';
import UserView from './pages/View';
import UserProfile from './pages/Profile';
import UserReports from './pages/Reports';

export const usersRoutes: RouteObject[] = [
    {
        path: '',
        element: <UserList />
    },
    {
        path: 'create',
        element: <UserCreate />
    },
    {
        path: 'profile',
        element: <UserProfile />
    },
    {
        path: 'reports',
        element: <UserReports />
    },
    {
        path: ':id',
        element: <UserView />
    },
    {
        path: ':id/edit',
        element: <UserEdit />
    }
];
