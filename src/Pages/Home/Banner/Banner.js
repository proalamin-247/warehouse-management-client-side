import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='container mt-4 '>
            {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
            <Carousel>
                <Carousel.Item className='rounded'>
                    <img
                        className="d-block w-100 rounded"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-primary bg-white'>Warehouse Management</h3>
                        <p className='bg-primary'>Check your products quantity and restocks easyly</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;