import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import Homepage from './pages/Homepage';
import Forgot from './pages/Forgot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot',
    element: <Forgot />
  }
]);

export default router;
