import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />

    );
  } else {
    sessionLinks = (
      <div className={'login-and-signup'}>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <nav className='profile-details'>
      <div className={'nav-bar-links'}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/spots">Check out the newest spots!</NavLink>
        {sessionUser && 
        <NavLink to='/spots/new'>Post a new Spot</NavLink>}
      </div>
        {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;