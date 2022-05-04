import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const ForgetPassword = () => {
    const emailRef = useRef('');
    let errorElement;

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }
    if (sending) {
        return <Loading></Loading>;
    }
    const handaleSubmit = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast.success("password reset link send your email", {
            theme: "colored"
        });
    }
    return (
        <div className="container h-100 mt-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black">
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forget Password</p>
                                    <form onSubmit={handaleSubmit}  className="mx-1 mx-md-4">
                                        <div className="mb-2">
                                            <div className="form-outline flex-fill mb-0">
                                                <input id='email' ref={emailRef} type="email"  className="form-control" required />
                                                <label className="form-label" >Your Email</label>
                                            </div>
                                        </div>
                                        <div className="mb-2 mt-2">
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                                        </div>
                                    </form>
                                    {errorElement}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;