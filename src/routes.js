import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import Homepage from './pages/Homepage';
import Forgot from './pages/Forgot';
import URLS from './utils/enums';

const router = createBrowserRouter([
  {
    path: URLS.HOME,
    element: <Homepage />,
  },
  {
    path: URLS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: URLS.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: URLS.FORGOT,
    element: <Forgot />
  }
]);

export default router;
