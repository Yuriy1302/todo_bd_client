import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { registration } from '../../slices/user.action';

import { RootState, AppDispatch } from '../../store';

import './SignupPage.css';

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { isLoading, isFailur, token } = useSelector((state: RootState) => state.user);
    
    const [formData, setFormData] = useState<{ email: string; password: string; }>({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (token) {
            navigate("/todospace");
        }
    }, [token]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOnSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(registration(formData));
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="login-form mt-5">
            <h2 className="login-form__title">Sign Up</h2>
            <span className="login-form__subtitle">
                Already have an account? <Link to="/login">Log In</Link>
            </span>
            <form className="mt-3" onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={formData.email}
                        onChange={(event) => handleOnChange(event)}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                    />
                    {/* <small id="emailHelp" className="form-text text-muted">
                        Мы никогда никому не передадим Вашу электронную почту.
                    </small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={formData.password}
                        onChange={(event) => handleOnChange(event)}
                        type="password"
                        className="form-control"
                        id="password" name="password"
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="passwordConfirm">Password confirmation</label>
                    <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" />
                </div> */}
                <div className="form-group">
                    {isFailur && (
                        <div className="alert alert-danger" role="alert">
                            Something went wrong!
                        </div>
                    )}
                </div>
                <div className="mt-3">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
