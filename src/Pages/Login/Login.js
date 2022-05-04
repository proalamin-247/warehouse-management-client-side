import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const handaleSubmit= event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }

    return (
        <div className="container h-100 mt-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black">
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                    <form onSubmit={handaleSubmit} className="mx-1 mx-md-4">

                                        <div className="mb-2">
                                            <div className="form-outline flex-fill mb-0">
                                                <input id='email' type="email" ref={emailRef} className="form-control" required/>
                                                <label className="form-label" >Your Email</label>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <div className="form-outline flex-fill mb-0">
                                                <input id='password' type="password" ref={passwordRef} className="form-control" required/>
                                                <label className="form-label" >Password</label>
                                            </div>
                                        </div>
                                        <Link to='/forgetpassword' className='text-danger pe-auto text-decoration-none'>Forget Password</Link>
                                        <div className="mb-2 mt-2">
                                            <button type="submit" className="btn btn-primary w-100">Login</button>
                                        </div>

                                        <div className="">
                                            <p>Have not account? <Link to='/register' className=' text-decoration-none'>Please Register</Link></p>
                                        </div>
                                        <div>
                                            {errorElement}
                                        </div>
                                    </form>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;