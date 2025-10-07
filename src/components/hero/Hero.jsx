import React from 'react';
import appImg from "../../assets/aoostore.png"
import playImg from '../../assets/playstore.png'

const Hero = () => {
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
        <div className="">
            <img src="" alt="" />
        </div>
        </div>
    );
};

export default Hero;