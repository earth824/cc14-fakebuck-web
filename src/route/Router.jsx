import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RedirectIfAuthenticated from '../features/auth/components/RedirectIfAuthenticated';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    )
  },
  { path: '/', element: <HomePage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
