import { Link } from 'react-router-dom';
import URLS from '../utils/enums';

const ForgotPage = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-200 text-white'>
      <div className='w-96 h-[22rem]'>
        <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex flex-col h-full border rounded-xl'>
          <div className='self-center w-3/4 mt-6 text-xl'>Reset Password</div>
          <p className='pl-12 pr-12 mt-8 text-xs'>
            Forgotten your password? Enter your email address below and we will
            send you an e-mail for resetting it.
          </p>
          <div className='flex flex-col mt-4'>
            <label htmlFor='email' className='self-center w-3/4'>
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
          <button className='bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 w-3/4 border rounded-lg self-center h-10 mt-6 p-2'>
            Reset Password
          </button>
          <p className='self-end mr-12 mt-6'>
            Back to{' '}
            <Link to={URLS.LOGIN} className='text-blue-800'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
