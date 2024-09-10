import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ForgotPage from './pages/ForgotPage';
import {URLS} from './utils/enums';
import ProblemPage from './pages/ProblemPage';
import RegisterProblemPage from './pages/RegisterProblemPage';

const router = createBrowserRouter([
  {
    path: URLS.HOME,
    element: <HomePage />,
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
    element: <ForgotPage />,
  },
  {
    path: `${URLS.PROBLEM}/:id`,
    element: <ProblemPage />,
  },
  {
    path: `${URLS.PROBLEM}${URLS.CREATE}`,
    // element:<p>dsdsdsds</p>
    element: <RegisterProblemPage />
  }
]);

export default router;
