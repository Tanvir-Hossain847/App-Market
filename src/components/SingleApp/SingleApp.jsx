import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    const {image, title, downloads, ratingAvg, id} = app
    return (
        <div className=''>
            <Link to={`/appDetails/${id}`}>
            <div className="shadow-sm h-118 p-5 bg-white rounded-md hover:translate-y-[-10px] transition-all ease-in">
            <div className="">
                <div className="bg-gray-100 rounded-lg py-20">
                    <img className='w-40 mx-auto' src={image} alt="" />
                </div>
                <h1 className='text-xl primary py-6'>{title}</h1>
                <div className="flex justify-between primary items-center font-bold">
                    <button className='flex py-1 rounded--md bg-gray-100 px-4 text-green-500'><span className='mr-1.5'><Download></Download></span>{Math.floor(downloads / 10000000)}M</button>
                    <button className='rounded-md text-amber-500 flex py-1 bg-amber-100 px-4'><span className='mr-1.5'><Star></Star></span>{ratingAvg}</button>
                </div>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default SingleApp;