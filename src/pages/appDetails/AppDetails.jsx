import React from 'react';
import { useParams } from 'react-router';
import useApp from '../../hooks/useApp';
import { Download, StarIcon, ThumbsUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const {apps} = useApp()
    const {id} = useParams()
    const convertedId = parseInt(id)
    const oneApp = apps.find(app => app.id === convertedId)
    if(!oneApp){
        return <p className='text-center'>loading app details</p>
    }
    const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = oneApp
    const {count, name} = ratings;

    return (
        <div>
            <div className="flex justify-between w-11/12 mx-auto gap-10 my-5 border-b-1 border-gray-400 py-10">
                <div className="">
                    <img className='w-85' src={image} alt="" />
                </div>
                <div className="flex-1 primary py-2">
                    <div className="">
                    <h1 className='text-4xl font-bold pb-1'>{title}</h1>
                    <p className='border-b-1 border-gray-400 pb-5'>Devoloped By: <span className='bg-primary'>{companyName}</span></p>
                </div>
                <div className="flex gap-20 my-8">
                    <div className="">
                        <i class="fa-solid fa-download text-green-500 text-3xl"></i>
                        <p className='py-2 text-gray-600'>Downloads</p>
                        <h1 className='text-4xl font-bold'>{Math.floor(downloads / 100000000)} M</h1>
                    </div>
                    <div className="">
                        <i class="fa-solid fa-star text-amber-500 text-3xl"></i>
                        <p className='py-2 text-gray-600'>Avarage Rating</p>
                        <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                    </div>
                    <div className="">
                       <i class="fa-solid fa-thumbs-up text-purple-600 text-3xl"></i>
                        <p className='py-2 text-gray-600'>Total Review</p>
                        <h1 className='text-4xl font-bold'>{Math.floor(reviews / 100000)} K</h1>
                    </div>
                </div>
                <div className="">
                    <button className='btn btn-success text-white'>
                        Install Now ({size}MB)
                    </button>
                </div>
                </div>
            </div>
            <div className='py-5 border-b-1 border-gray-400 mb-5 w-11/12 mx-auto'>
                <h1 className='text-xl font-bold primary'>Ratings</h1>
                <BarChart className='mx-auto' width={1800} height={500} data={ratings} layout='vertical'>
                    <CartesianGrid strokeDasharray="5 5"></CartesianGrid>
                <XAxis type='number'></XAxis>
                     <YAxis type='category' dataKey="name"></YAxis>
                <Bar dataKey="count" fill='orange' barSize={30}></Bar>
                </BarChart>
            </div>
            <div className="w-11/12 mx-auto mb-5">
                <h1 className='font-bold primary text-xl'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;