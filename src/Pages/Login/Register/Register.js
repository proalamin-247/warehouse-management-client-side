import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [agree, setAgree]= useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;

    const handaleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div className="container h-100 mt-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black">
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                    <form onSubmit={handaleSubmit} className="mx-1 mx-md-4">
                                        <div className="mb-2">
                                            <div className="form-outline flex-fill mb-0">
                                                <input ref={nameRef} type="text" id="name" className="form-control" required/>
                                                <label className="form-label">Your Name</label>
                                            </div>
                                        </div>

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

                                        <div className="mb-3">
                                            <input onClick={() => setAgree(!agree)} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                            <label className={agree ? 'text-primary' : 'text-danger'} >
                                                I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                        </div>

                                        <div className="mb-2">
                                            <button type="submit" disabled={!agree} className="btn btn-primary w-100">Register</button>
                                        </div>
                                        <div>
                                            <p className='mt-2'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
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

export default Register;