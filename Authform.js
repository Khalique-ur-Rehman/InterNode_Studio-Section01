import React, { useState } from 'react'

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const validateLogin = () => {
        const newErrors = {};
        if (!loginData.email) newErrors.email = 'Email is required';
        if (!loginData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateSignup = () => {
        const newErrors = {};
        if (!signupData.name) newErrors.name = 'Name is required';
        if (!signupData.email) newErrors.email = 'Email is required';
        if (!signupData.password) newErrors.password = 'Password is required';
        if (signupData.password !== signupData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (validateLogin()) {
            // Submit login data
            console.log('Login data:', loginData);
        }
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (validateSignup()) {
            // Submit signup data
            console.log('Signup data:', signupData);
        }
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Sign Up</button>
                </div>
                {isLogin ? (
                    <form className='form' onSubmit={handleLoginSubmit}>
                        <h2>Login Form</h2>
                        <input type='email' name='email' placeholder='Email' value={loginData.email} onChange={handleLoginChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                        <input type='password' name='password' placeholder='Password' value={loginData.password} onChange={handleLoginChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
                        <a href='#'>Forget Password?</a>
                        <button type='submit'>Login</button>
                        <p>Not a Member? <a href='#' onClick={() => setIsLogin(false)}>Sign Up now</a></p>
                    </form>
                ) : (
                    <form className='form' onSubmit={handleSignupSubmit}>
                        <h2>Sign Up Form</h2>
                        <input type='text' name='name' placeholder='Name' value={signupData.name} onChange={handleSignupChange} />
                        {errors.name && <p className='error'>{errors.name}</p>}
                        <input type='email' name='email' placeholder='Email' value={signupData.email} onChange={handleSignupChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                        <input type='password' name='password' placeholder='Password' value={signupData.password} onChange={handleSignupChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
                        <input type='password' name='confirmPassword' placeholder='Confirm Password' value={signupData.confirmPassword} onChange={handleSignupChange} />
                        {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                        <button type='submit'>Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginSignup;
