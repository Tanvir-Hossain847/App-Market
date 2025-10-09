import React from 'react';
import { Link, NavLink } from 'react-router';
import logoPng from '../../assets/logo.png'

const Navber = () => {
    return (
       <div className="navbar bg-base-100 px-10 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow primary">
        <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/app'}>Apps</NavLink>
      <NavLink to={'/installed'}>Installation</NavLink>
      </ul>
    </div>
    <Link to={'/'}>
    <div className="flex gap-2 items-center">
      <img className='w-10' src={logoPng} alt="" />
      <span className='bg-primary primary font-bold'>HERO.IO</span>
      </div>
      </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 primary">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/app'}>Apps</NavLink>
      <NavLink to={'/installed'}>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='btn bg-btn px-4 text-white'><a target='_blank' href="https://github.com/Tanvir-Hossain847">
    <i className="fa-brands fa-github text-lg"></i>
    Contribution
    </a></button>
  </div>
</div>
    );
};

export default Navber;