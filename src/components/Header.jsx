import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-full.png';

const Header = () => {
  return (
    <header className='bg-dark-layer-1 h-14 flex justify-between'>
      <div className='grow flex justify-start items-center'>
        <img src={logo} className='w-24 ml-6' />
      </div>
      <div className='grow flex justify-end items-center'>
        <Link className='bg-neutral-700 mr-6 rounded-lg w-24 h-8 text-white flex justify-center items-center'>
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
