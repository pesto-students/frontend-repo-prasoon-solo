import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo-full.png';
import {URLS} from '../utils/enums';
import { useEffect, useState } from 'react';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) setUser(loginUser);
  });

  const handleLogout = () => {
    localStorage.clear('accessToken');
    localStorage.clear('refreshToken');
    localStorage.clear('user');
    navigate(URLS.LOGIN);
  };

  const renderLoginOrUser = () => {
    if (user) {
      return (
        <>
          <p className='text-white mr-6'>{user.fullName}</p>
          <button
            onClick={handleLogout}
            className='bg-neutral-700 mr-6 rounded-lg w-24 h-8 text-white flex justify-center items-center'
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <Link
          to={URLS.LOGIN}
          className='bg-neutral-700 mr-6 rounded-lg w-24 h-8 text-white flex justify-center items-center'
        >
          <button>Login</button>
        </Link>
      );
    }
  };
  // console.log('user=>', user);

  return (
    <header className='bg-dark-layer-1 h-14 flex justify-between'>
      <div className='grow flex justify-start items-center'>
        <Link to={URLS.HOME}>
          <img src={logo} className='w-24 ml-6' />
        </Link>
      </div>
      <div className='grow flex justify-end items-center'>
        {/* <Link
          to={URLS.LOGIN}
          className='bg-neutral-700 mr-6 rounded-lg w-24 h-8 text-white flex justify-center items-center'
        >
          <button>Login</button>
        </Link> */}
        {renderLoginOrUser()}
      </div>
    </header>
  );
};

export default Header;
