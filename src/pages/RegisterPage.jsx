import { Link } from 'react-router-dom';
import URLS from '../utils/enums';

const RegisterPage = () => {
  return (
    <div className='h-screen flex justify-center items-center text-white bg-slate-200'>
      <div className='w-96 h-3/5'>
        <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex flex-col h-full border rounded-xl '>
          <div className='self-center w-3/4 mt-6 text-xl'>
            Register to neetcode
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='email' className='self-center w-3/4 text-xs'>
              Email
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
            <label htmlFor='name' className='self-center w-3/4 text-xs'>
              Name
            </label>
            <input
              id='name'
              type='text'
              required
              placeholder='John Doe'
              className='border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2'
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='password' className='self-center w-3/4 text-xs'>
              Password
            </label>
            <input
              id='password'
              type='password'
              required
              className='border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2'
            />
          </div>
          <button className='bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 w-3/4 border rounded-lg self-center h-10 mt-6 p-2'>
            Register
          </button>
          <p className='mt-8 ml-12'>
            Already have an account ?{' '}
            <Link to={URLS.LOGIN} className='text-blue-800'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
