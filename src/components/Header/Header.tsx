import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '../../store';

import { logout } from '../../slices/user.slice';

import './Header.css';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { token } = useSelector((state: RootState) => state.user);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLogouClick = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="navbar navbar-dark bg-dark">
            <h1 className="navbar-brand"><Link to="/">ToDo List</Link></h1>
            {token && (
                <div className="">
                    <Link to="/todospace">Todos list</Link>
                    <button onClick={handleLogouClick} className="btn btn-light ml-3">
                        Log Out
                    </button>
                </div>
            )}
            {!token && (
                <div className="">
                    <button onClick={handleLoginClick} className="btn btn-light">
                        Log In
                    </button>
                    <button onClick={handleSignupClick} className="btn btn-light ml-3">
                        Sign Up
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
