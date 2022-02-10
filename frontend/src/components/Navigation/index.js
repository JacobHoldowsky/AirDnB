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
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='profile-details'>
      <li className={'nav-bar-links'}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/spots">Check out the newest spots!</NavLink>
        {sessionUser && 
        <NavLink to='/spots/new'>Post a new Spot</NavLink>}
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;