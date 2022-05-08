import React from 'react';

const SendMessage = () => {
    return (
        <section class="container" id="contact-us">
            <div class="my-5">
                <h3 class="text-center">Have a <span className='text-primary'>question</span>?</h3>
                <form id="contactForm" class="p-3">
                    <div class="mb-3">
                        <label class="form-label" for="name">Name</label>
                        <input class="form-control" id="name" type="text" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="emailAddress">Email Address</label>
                        <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="message">Question</label>
                        <textarea class="form-control" id="message" type="text" placeholder="Write Your Question" style={{ height: '10rem' }}></textarea>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SendMessage;