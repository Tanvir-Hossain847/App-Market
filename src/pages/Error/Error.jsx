import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='grid justify-center my-20'>
            <div className="mx-auto">
            <img src={errorImg} alt="" />
            </div>
            <div className="text-center">
                <h1 className='text-5xl font-bold my-5'>Ooops! Page Not Found</h1>
                <p className='text-gray-500 text-xl'>The Page You Are Looking For Is Not Found</p>
                <Link to={'/'}><button className='btn bg-btn text-white mt-3'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;