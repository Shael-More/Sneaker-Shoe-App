import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { login, navlinks } from '../../constants/index';

const Header = () => {
  return (
    <header className='flex justify-between items-center  shadow-sm p-8'>
      <div className='px-8'>
        <NavLink to={'/'}>
          <div className='flex items-center'>
            <img src={logo} alt='' className='w-[34px]' />
            <h1 className='text-2xl font-lato ml-2 font-bold'>Sneaker</h1>
          </div>
        </NavLink>
      </div>

      <nav className='text-gray font-semibold'>
        <ul className='flex space-x-10 list-none '>
          {navlinks.map((link) => (
            <li>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'text-orange' : 'text-gray'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex space-x-3 px-8 items-center text-gray'>
        {/* icons will come here */}
        {
          login.map(item => (
            <p key={item.label}>{item.icon}</p>
          ))
        }
      </div>
    </header>
  );
};

export default Header;
