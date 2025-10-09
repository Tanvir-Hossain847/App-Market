import React, { useEffect, useState } from 'react';
import Hero from '../../components/hero/Hero';
import useApp from '../../hooks/useApp';
import Loader from '../../components/loader/Loader';

const Home = () => {

    const {loading} = useApp()
    const [isDelayedLoading, setIsDelayedLoading] = useState(false)

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsDelayedLoading(true)
        }, 300)
        return () => clearTimeout(delay)
    },[])

    return (
        <div>
            {
                loading || !isDelayedLoading ? (
                    <div className="my-35"><Loader></Loader></div>
                ) : (
                    <Hero></Hero>
                )
            }
        </div>
    );
};

export default Home;