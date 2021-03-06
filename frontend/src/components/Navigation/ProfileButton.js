import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory()
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = async (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <div className={'profile-button-and-dropdown'}>
            <button 
            onClick={openMenu}
            className="user-profile-btn"
            >
                <i className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li
                        className='username'
                    >{user.username}</li>
                    <li
                        className='email'
                    >{user.email}</li>
                    <li
                        className='dropdown-button'
                    >
                        <button 
                        className={'dropdown-logout-button'}
                        onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;