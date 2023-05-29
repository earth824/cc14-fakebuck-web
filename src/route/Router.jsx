import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RedirectIfAuthenticated from '../features/auth/components/RedirectIfAuthenticated';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import Header from '../layouts/Header';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    )
  },
  {
    path: '/',
    element: (
      // <ProtectedRoute>
      <Header />
      // </ProtectedRoute>
    )
  },
  {
    path: '/friend',
    element: <Header />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
