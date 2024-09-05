import { Link,useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import URLS from '../utils/enums';
import authAxios from '../utils/authAxios';
import Header from '../components/Header';
import { useEffect } from 'react';

const RegisterPage = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user?.id) navigate(URLS.HOME)
  },[])


  const signupUserSchema = z
    .object({
      email: z
        .string({ message: 'Email is required.' })
        .email({ message: 'Please enter a valid Email.' }),
      password: z
        .string({ message: 'Password is required.' })
        .min(6, { message: 'Password must be atleast 6 characters long.' }),
      confirmPassword: z
        .string({ message: 'Confirm Password is required.' })
        .min(6, {
          message: 'Confirm Password must be atleast 6 characters long.',
        }),
      fullName: z
        .string({ message: 'Full Name is required.' })
        .min(6, { message: 'Full Name must be atleast 6 characters long.' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupUserSchema),
  });

  const onSubmitHandler = async (data) => {
    try {
      console.log('triggered');
      const { email, password, fullName, confirmPassword } = data;
      const result = await authAxios.post('auth/register', {
        email,
        password,
        confirmPassword,
        fullName,
      });
      console.log('result', result);
      if (result.status !== 200) throw new Error(result);
    } catch (error) {
      console.log('error', error);
      setError('root', error.response?.data);
      toast.error(error.response?.data.message, { theme: 'colored' });
    }
  };
  console.log('errors', errors);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className='h-screen flex justify-center items-center text-white bg-slate-200'>
        <div className='w-96 h-3/4'>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex flex-col h-full border rounded-xl '
          >
            <div className='self-center w-3/4 mt-6 text-xl'>
              Register to neetcode
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor='email' className='self-center w-3/4 text-xs'>
                Email
              </label>
              <input
                id='email'
                {...register('email')}
                placeholder='johndoe@gmail.com'
                className={`border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black ${
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
            <div className={`flex flex-col ${errors.email ? 'mt-2' : 'mt-6'}`}>
              <label htmlFor='name' className='self-center w-3/4 text-xs'>
                Name
              </label>
              <input
                id='name'
                type='text'
                {...register('fullName')}
                placeholder='John Doe'
                className={`border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black ${
                  errors.fullName
                    ? 'border-4 border-rose-700'
                    : 'border border-white'
                }`}
              />
              {errors.fullName && (
                <span className='text-xs ml-12 text-rose-700'>
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div
              className={`flex flex-col ${errors.fullName ? 'mt-2' : 'mt-6'}`}
            >
              <label htmlFor='password' className='self-center w-3/4 text-xs'>
                Password
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
            <div
              className={`flex flex-col ${errors.password ? 'mt-2' : 'mt-6'}`}
            >
              <label
                htmlFor='confirmPassword'
                className='self-center w-3/4 text-xs'
              >
                Confirm Password
              </label>
              <input
                id='confirmPassword'
                type='password'
                {...register('confirmPassword')}
                className={`border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black ${
                  errors.confirmPassword
                    ? 'border-4 border-rose-700'
                    : 'border border-white'
                }`}
              />
              {errors.confirmPassword && (
                <span className='text-xs ml-12 text-rose-700'>
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 w-3/4 border rounded-lg self-center h-10 p-2 ${
                errors.confirmPassword ? 'mt-4' : 'mt-8'
              }`}
            >
              {isSubmitting ? 'Loading' : 'Register'}
            </button>
            {errors.root && (
              <span className='text-xs ml-12 text-rose-700 mt-2'>
                {errors.root.message}
              </span>
            )}
            <p className={`ml-12 ${errors.root ? 'mt-6' : 'mt-12'}`}>
              Already have an account ?{' '}
              <Link to={URLS.LOGIN} className='text-blue-800'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
