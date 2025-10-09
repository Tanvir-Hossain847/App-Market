import React, { useEffect, useState } from 'react';
import useApp from '../../hooks/useApp';
import SingleApp from '../../components/SingleApp/SingleApp';
import { Search } from 'lucide-react';
import ErrorApp from '../../components/ErrorApp/ErrorApp';
import { Link, Navigate, useNavigate } from 'react-router';
import Loader from '../../components/loader/Loader';

const App = () => {

    const {apps, loading} = useApp();
    const [searchApp, setSearchApp] =useState("")
    const [isDelayedLoading, setIsDelayedLoading] = useState(true)
    const [loadApp, setLoadApp] = useState(null)
    
    useEffect(() => {
        if(!loading){
            setLoadApp(apps)
        }
    },[apps, loading])
    
    useEffect(() => {
        const term = searchApp.trim().toLocaleLowerCase()
        
        setLoadApp(null)

        const delay = setTimeout(() => {
            if(!term){
                setLoadApp(apps)
            }
            else{
                const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase() .includes(term)) : apps;

                setLoadApp(searchedApps)
            }
        }, 300)
        return () => clearTimeout(delay)
    }, [searchApp, apps])

    useEffect(() => {
        const delay =setTimeout(() => {
            setIsDelayedLoading(false);
        }, 1000)

        return () => clearTimeout(delay);
    },[loading])

  
    
    const navigate = useNavigate()

    const handleReload = () => {
        navigate(0);
        return
    }


    return (
        <div className="py-8">
            <div className="text-center py-10 px-5">
                <h1 className='text-5xl primary font-bold'>Our All Applications</h1>
                <p className='primary text-gray-500 py-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
        <div className="px-10 flex justify-between items-center pb-6">
            <h2 className='md:text-2xl text-[16px] font-bold primary'>({loadApp?.length || 0}) Apps Found</h2>
            <div className="">
                <label className="input">
                    <Search></Search>
  <input value={searchApp} onChange={(e) => setSearchApp(e.target.value)} type="search" className="focus:outline-none focus:ring-0 md:focus:w-80 transition-all ease-in duration-500" placeholder="Search" />
</label>
            </div>
        </div>

        <div className=''>
            { loading || isDelayedLoading || loadApp === null ? (
                <div className="my-20"><Loader></Loader></div>
            ) : loadApp.length > 0 ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 px-10">
                    {
                    loadApp.map(app => <SingleApp key={app.id} app={app}></SingleApp>)
                    }
                </div>) : (
                    <div className="text-center py-10 px-10">
                    
                    <ErrorApp></ErrorApp>
                    <h1 className='text-5xl font-bold primary py-5'>Hey! App Not Found</h1>
                    <p className='text-gray-600 primary pb-3'>The App you are requesting is not found on our system.  please try another apps</p>
                    <button onClick={() => handleReload()} className='btn bg-btn text-white'>Go Back</button>

                </div>
                )
            }
        </div>
        </div>
    );
};

export default App;