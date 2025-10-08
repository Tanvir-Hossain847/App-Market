import React, { useState } from 'react';
import useApp from '../../hooks/useApp';
import SingleApp from '../../components/SingleApp/SingleApp';
import { Search } from 'lucide-react';
import ErrorApp from '../../components/ErrorApp/ErrorApp';
import { Link, Navigate, useNavigate } from 'react-router';
import Loader from '../../components/loader/Loader';

const App = () => {

    const {apps, loading} = useApp();
    const [searchApp, setSearchApp] =useState("")
    const term = searchApp.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase() .includes(term)) : apps;
    console.log(searchedApps);
    
    // if(loading) 
    //     return <div className="">Apps Loading....</div>

    // if(searchedApps.length === 0)
    //     return <ErrorApp></ErrorApp>
    const navigate = useNavigate()

    const handleReload = () => {
        navigate(0);
        return
    }

    // if(searchedApps.length === 0){
    //     return  (
        
    //             )
    // }

    return (
        <div className="py-15">
        <div className="px-10 flex justify-between items-center pb-6">
            <h2 className='text-2xl font-bold primary'>({searchedApps.length}) Apps Found</h2>
            <div className="">
                <label className="input">
                    <Search></Search>
  <input value={searchApp} onChange={(e) => setSearchApp(e.target.value)} type="search" className="focus:outline-none focus:ring-0 focus:w-80 transition-all ease-in duration-500" placeholder="Search" />
</label>
            </div>
        </div>

        <div className=''>
            { loading ? (
                <Loader></Loader>
            ) : searchedApps.length > 0 ? (
                <div className="grid grid-cols-4 gap-6 px-10">
                    {
                    searchedApps.map(app => <SingleApp app={app}></SingleApp>)
                    }
                </div>) : (
                    <div className="text-center py-10">
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