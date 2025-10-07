import React from 'react';
import appImg from "../../assets/aoostore.png"
import playImg from '../../assets/playstore.png'
import heroImg from '../../assets/hero.png'
import useApp from '../../hooks/useApp';
import SingleApp from '../SingleApp/SingleApp';

const Hero = () => {

    const {apps, loading} = useApp()
    console.log(apps);
    

    return (
        <div className="">
        <div className='my-15'>
            <div className="w-3/4 text-center mx-auto mb-5">
            <h1 className='text-6xl primary font-bold py-4'>We Build <br /><span className='bg-primary'>Productive </span>Apps</h1>
            <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="text-center space-x-3">
                <button className='btn btn-outline'> <a className='flex items-center gap-2' target='_blank' href="https://play.google.com/store/games?hl=en"><img src={playImg} alt="" /> <h1>Google Play</h1></a></button>
                <button className='btn btn-outline'><a className='flex items-center gap-2' href="https://www.apple.com/app-store/"><img src={appImg} alt="" /> <h1>App Store</h1></a></button>
            </div>
        </div>
        <div className="my-15">
            <img className='w-3/5 mx-auto' src={heroImg} alt="" />
            <div className="bg-btn">
                <div className="text-white text-center py-10 w-3/4 mx-auto">
                    <h1 className='font-bold text-3xl'>Trusted by Millions, Built for You</h1>
                    <div className="flex justify-between primary py-8">
                    <div className="space-y-3">
                        <p className='text-gray-200'>Total Downloads</p>
                        <h1 className='font-bold text-4xl'>29.6M</h1>
                        <p className='text-gray-200'>21% more than last month</p>
                    </div>
                    <div className="space-y-3">
                        <p className='text-gray-200'>Total Reviews</p>
                        <h1 className='font-bold text-4xl'>906K</h1>
                        <p className='text-gray-200'>46% more than last month</p>
                    </div>
                    <div className="space-y-3">
                        <p className='text-gray-200'>Active Apps</p>
                        <h1 className='font-bold text-4xl'>132+</h1>
                        <p className='text-gray-200'>31 more will Launch</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center space-y-2 mb-15">
            <h1 className='font-bold text-3xl'>Tranding Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="">
            {
                apps.map(app => <SingleApp></SingleApp>)
            }
        </div>
        </div>
    );
};

export default Hero;