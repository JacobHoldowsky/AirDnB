import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    const demoUserLogIn = (e) => {
        e.preventDefault();

        const demoUser = {
            credential: 'Demo-lition',
            password: 'password'
        }

        return dispatch(sessionActions.login(demoUser))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className={'a-form-container'}>
            <form onSubmit={handleSubmit} className={'login-form'}>
                <ul className={'login-error-container'}>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div
                    className="login-container"
                >
                    <label
                        className="username-or-email"
                    >
                        Username
                        <input
                            className='username-input'
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                    <label
                        className="login-password"
                    >
                        Password
                        <input
                            className='password-input'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
        
                    <div
                        className='login-button'
                    >
                        <button type='submit'>Log In</button>
                    </div>
                    <button
                        onClick={demoUserLogIn}
                    >
                        Login as a demo user
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginFormPage;