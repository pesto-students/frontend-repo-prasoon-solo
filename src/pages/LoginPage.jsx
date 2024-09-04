import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import URLS from '../utils/enums';
import axios from 'axios';
import {z} from 'zod';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);

  // const loginUserSchema = z.object({
  //   email:z.string({message:'Email is required.'}).email({message:'Please enter a valid Email.'}),
  //   password:z.string({message:'Password is required.'}).min(6,{message:'Password must be atleast 6 characters long.'})
  // })
  const loginHandler = async () => {

    const result = await axios.post('http://localhost:8080/api/v1/auth/login', {
      email, password
    })
    console.log('result', result)
  }
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
              className='border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className='border border-white rounded-lg w-3/4 self-center h-10 mt-2 p-2 text-black'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className='ml-12 text-red-900'>Email or password is incorrect</p>
          <button onClick={loginHandler} className='bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 w-3/4 border rounded-lg self-center h-10 mt-6 p-2'>
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
