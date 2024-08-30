import { Link } from 'react-router-dom';
import URLS from '../utils/enums';

const LoginPage = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-200 text-white'>
      <div className='w-96 h-1/2'>
        <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex flex-col h-full border rounded-xl'>
          <div className='self-center w-3/4 mt-6 text-xl'>
            Log in to neetcode
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='email' className='self-center w-3/4 text-xs'>
              Your email
            </label>
            <input
              id='email'
              type='email'
              required
              placeholder='johndoe@gmail.com'
              className='border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2'
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='password' className='self-center w-3/4 text-xs'>
              Your password
            </label>
            <input
              id='password'
              type='password'
              required
              className='border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2'
            />
          </div>
          <button className='bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 w-3/4 border rounded-lg self-center h-10 mt-6 p-2'>
            Login
          </button>
          <Link to={URLS.FORGOT} className='self-end mt-4 mr-12 text-amber-200'>
            Forgot Password?
          </Link>
          <p className='mt-4 ml-12'>
            Not registered?{' '}
            <Link to={URLS.REGISTER} className='text-blue-800'>
              Create a new Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
