import React from 'react';
import notFound from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='container text-center mt-5'>
            <img src={notFound} alt="" />
            <h1>Page not found</h1>
        </div>
    );
};

export default NotFound;