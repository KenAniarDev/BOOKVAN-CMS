import React from 'react';
import AdminWrapper from '../layouts/index';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Transactions from '../pages/Transactions';
import Companies from '../pages/Companies';
import Vans from '../pages/Vans';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const useRouteHooks = () => {
  const routes = [
    {
      path: '/',
      element: (
        <AdminWrapper>
          <Dashboard />
        </AdminWrapper>
      ),
    },
    {
      path: '/users',
      element: (
        <AdminWrapper>
          <Users />
        </AdminWrapper>
      ),
    },
    {
      path: '/transactions',
      element: (
        <AdminWrapper>
          <Transactions />
        </AdminWrapper>
      ),
    },
    {
      path: '/companies',
      element: (
        <AdminWrapper>
          <Companies />
        </AdminWrapper>
      ),
    },
    {
      path: '/vans',
      element: (
        <AdminWrapper>
          <Vans />
        </AdminWrapper>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ];

  return routes;
};

export default useRouteHooks;
