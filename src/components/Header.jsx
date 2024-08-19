import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-full.png';

const Header = () => {
  return (
    <header className='bg-neutral-700 h-14 flex justify-between'>
      <div className='grow flex justify-start items-center'>
        <img src={logo} className='w-24 ml-12' />
      </div>
      <div className='grow flex justify-end items-center'>
        <Link className='bg-neutral-500 mr-12 rounded-lg w-24 h-8 text-white flex justify-center items-center'>
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
