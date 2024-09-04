import { Link } from 'react-router-dom';
import URLS from '../utils/enums';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
  const loginUserSchema = z.object({
    email: z
      .string({ message: 'Email is required.' })
      .email({ message: 'Please enter a valid Email.' }),
    password: z
      .string({ message: 'Password is required.' })
      .min(6, { message: 'Password must be atleast 6 characters long.' }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: { email: 'test@test.com', password: 'password' },
  });

  const onSubmitHandler = async (data) => {
    try {
      const { email, password } = data;
      const result = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        {
          email,
          password,
        }
      );
      if (result.status !== 200) throw new Error(result);
    } catch (error) {
      setError('root', error.response.data);
      toast.error(error.response.data.message,{theme:"colored"});
    }
  };
  return (
    <div className='h-screen flex justify-center items-center bg-slate-200 text-white'>
      <ToastContainer theme='dark' />
      <div className='w-96 h-1/2'>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex flex-col h-full border rounded-xl'
        >
          <div className='self-center w-3/4 mt-6 text-xl'>
            Log in to neetcode
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='email' className='self-center w-3/4 text-xs'>
              Your email
            </label>
            <input
              id='email'
              {...register('email')}
              placeholder='johndoe@gmail.com'
              className={`rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black ${
                errors.email
                  ? 'border-4 border-rose-700'
                  : 'border border-white'
              }`}
            />
            {errors.email && (
              <span className='text-xs ml-12 text-rose-700'>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className={`flex flex-col ${errors.email ? 'mt-0' : 'mt-4'}`}>
            <label htmlFor='password' className='self-center w-3/4 text-xs'>
              Your password
            </label>
            <input
              id='password'
              type='password'
              {...register('password')}
              className={`border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black ${
                errors.password
                  ? 'border-4 border-rose-700'
                  : 'border border-white'
              }`}
            />
            {errors.password && (
              <span className='text-xs ml-12 text-rose-700'>
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 w-3/4 border rounded-lg self-center h-10 p-2 ${
              errors.password ? 'mt-2' : 'mt-6'
            }`}
          >
            {isSubmitting ? 'Loading' : 'Login'}
          </button>
          {errors.root && (
            <span className='text-xs ml-12 text-rose-700'>
              {errors.root.message}
            </span>
          )}
          <Link
            to={URLS.FORGOT}
            className={`self-end mr-12 text-amber-200 ${
              errors.root ? 'mt-0' : 'mt-4'
            }`}
          >
            Forgot Password?
          </Link>
          <p className='mt-4 ml-12'>
            Not registered?{' '}
            <Link to={URLS.REGISTER} className='text-blue-800'>
              Create a new Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
