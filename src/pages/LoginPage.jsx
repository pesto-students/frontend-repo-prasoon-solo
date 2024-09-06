import { Link, useNavigate } from 'react-router-dom';
import {URLS} from '../utils/enums';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import authAxios from '../utils/authAxios';
import Header from '../components/Header';
import { useEffect } from 'react';

const LoginPage = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user?.id) navigate(URLS.HOME)
  },[])


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
    defaultValues: {
      email: 'chatterjeeprasoon@gmail.com',
      password: 'password',
    },
  });

  const onSubmitHandler = async (data) => {
    try {
      const { email, password } = data;
      const result = await authAxios.post('/auth/login', {
        email,
        password,
      });
      const {accessToken,refreshToken,user} = result?.data;
      if(accessToken && refreshToken && user) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        const stringifyUser = JSON.stringify(user)
        localStorage.setItem('user',stringifyUser);
        navigate(URLS.HOME)
      }
      if (result.status !== 200) throw new Error(result);
    } catch (error) {
      console.log('error', error)
      setError('root', error.response.data);
      toast.error(error.response.data.message, { theme: 'colored' });
    }
  };

  return (
    <>
      <Header />
      <ToastContainer theme='dark' />
      <div className='h-screen flex justify-center items-center bg-slate-200 text-white'>
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
    </>
  );
};

export default LoginPage;
