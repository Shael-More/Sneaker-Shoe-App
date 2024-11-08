import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className='flex justify-between items-center  shadow-sm p-8'>
      <div className='ml-3'>
        <NavLink to={'/'}>
          <div className='flex items-center'>
           <img src={logo} alt='' className='w-[34px]' />
            <h1 className='text-2xl font-lato ml-2 font-bold'>Sneaker</h1>
          </div>
        </NavLink>
      </div>

      <nav className='text-gray font-semibold'>
        <ul className='flex space-x-10 list-none '>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange' : 'text-gray'
              }
              to={'/'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange' : 'text-gray'
              }
              to={'/shop'}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange' : 'text-gray'
              }
              to={'/about'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange' : 'text-gray'
              }
              to={'/blog'}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange' : 'text-gray'
              }
              to={'/contact'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='flex space-x-3 mr-2 items-center text-gray'>
        <p>Search</p>
        <p>Cart</p>
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Header;
