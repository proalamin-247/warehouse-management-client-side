import React from 'react';

const SendMessage = () => {
    return (
        <section className="container" id="contact-us">
            <div className="my-5">
                <h3 className="text-center">Have a <span className='text-primary'>question</span>?</h3>
                <form id="contactForm" className="p-3">
                    <div className="mb-3">
                        <label className="form-label" to="name">Name</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" to="emailAddress">Email Address</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" to="message">Question</label>
                        <textarea className="form-control" id="message" type="text" placeholder="Write Your Question" style={{ height: '10rem' }}></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SendMessage;