import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApp from '../../hooks/useApp';
import Download from '../../assets/icon-downloads.png'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { addInstallApp, getInstalledApp } from '../../utility/installFunction';
import Swal from 'sweetalert2';
import Loader from '../../components/loader/Loader';

const AppDetails = () => {
    const {apps} = useApp()
    const {id} = useParams()
    const convertedId = parseInt(id)
    const [buttonState, setButtonState] = useState(false)
    const [isDelayedLoading, setIsDelayedLoading] = useState(false)
    const oneApp = apps.find(app => app.id === convertedId)

    useEffect(() => {
        if(!oneApp){
            return
        }

        const localAppData = getInstalledApp()
        const convertedAppData = localAppData.map(id => parseInt(id))
        const isInstalled = convertedAppData.includes(oneApp.id)
        setButtonState(isInstalled)
    },[oneApp])

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsDelayedLoading(true)
        }, 500)
        return () => clearTimeout(delay)
    },[])

    if(!oneApp || !isDelayedLoading){
        return <div className="my-20"><Loader></Loader></div>
    }

    const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = oneApp
    

    const handleInstalled = (id) =>{
        addInstallApp(id)
    }

    const handleButtonChange = () => {
        handleInstalled(oneApp.id)
        setButtonState(true)
     }


    return (
        <div>
            <div className="flex md:flex-row flex-col justify-between w-11/12 mx-auto gap-10 my-5 border-b-1 border-gray-400 py-10">
                <div className="">
                    <img className='md:w-85 w-40 mx-auto' src={image} alt="" />
                </div>
                <div className="flex-1 primary py-2 md:text-left text-center">
                    <div className="">
                    <h1 className='text-4xl font-bold pb-1'>{title}</h1>
                    <p className='border-b-1 border-gray-400 pb-5'>Devoloped By: <span className='bg-primary'>{companyName}</span></p>
                </div>
                <div className="flex items-center md:gap-20 md:w-3/5 justify-between my-8">
                    <div className="">
                        <i class="fa-solid fa-download text-green-500 text-3xl"></i>
                        <p className='py-2 text-gray-600'>Downloads</p>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>{Math.floor(downloads / 100000000)} M</h1>
                    </div>
                    <div className="">
                        <i class="fa-solid fa-star text-amber-500 text-3xl"></i>
                        <p className='py-2 text-gray-600'>Avarage Rating</p>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>{ratingAvg}</h1>
                    </div>
                    <div className="">
                       <i class="fa-solid fa-thumbs-up text-purple-600 text-3xl"></i>
                        <p className='py-2 text-gray-600'>Total Review</p>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>{Math.floor(reviews / 100000)} K</h1>
                    </div>
                </div>
                <div className="justify-center">
                    <button onClick={() => {
                        Swal.fire({
                            title: 'Installed',
                            text: 'App Succesfully Installed',
                            icon: 'success',
                            confirmButtonText:"OK"
                        })
                        handleButtonChange(oneApp.id)
                        }} className='btn btn-success text-white'>
                        {
                            buttonState ? (
                                <p>Installed</p>
                            ) : (
                                <p>Install ({size}MB)</p>
                            )
                        }
                    </button>
                </div>
                </div>
            </div>
            <div className='py-5 border-b-1 border-gray-400 mb-5 w-11/12 h-[500px] mx-auto'>
                <h1 className='text-xl font-bold primary'>Ratings</h1>
                <ResponsiveContainer>
                <BarChart className='mx-auto' data={ratings} layout='vertical'>
                    <CartesianGrid strokeDasharray="5 5"></CartesianGrid>
                <XAxis type='number'></XAxis>
                     <YAxis type='category' dataKey="name"></YAxis>
                <Bar dataKey="count" fill='orange' barSize={30}></Bar>
                </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="w-11/12 mx-auto mb-5">
                <h1 className='font-bold primary text-xl'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;