import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

const Installedcard = ({app, handleRemove}) => {
    
    const {image, title, downloads, ratingAvg, size, id} = app

    return (
        <div>
            <div className="w-11/12 mx-auto h-25 flex justify-between items-center bg-base-100 my-5 px-10 rounded-md">
            <div className="flex gap-5 items-center">
            <div className="">
                <img className='w-15' src={image} alt="" />
            </div>
            <div className="">
                <h1 className='font-bold pb-2'>{title}</h1>
                <div className="flex gap-5">
                    <p className='flex text-green-600 gap-1 items-center'>
                        <img className='w-5' src={downloadIcon} alt="" />
                    {Math.floor(downloads / 10000000)}M
                    </p>
                    <p className='flex text-amber-500 gap-1 items-center'>
                        <img className='w-5' src={ratingIcon} alt="" />
                        {ratingAvg}
                        </p>
                    <p>{size} MB</p>
                </div>
            </div>
            </div>
            <div className="">
                <button onClick={() => handleRemove(id)} className='btn btn-success text-white'>Uninstall</button>
            </div>
            </div>
        </div>
    );
};

export default Installedcard;