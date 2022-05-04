import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-white w-75 border border-info d-block mx-auto'>
                    <span><FcGoogle /></span> <span className='px-1 mt-2'>Continue with  Google </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;