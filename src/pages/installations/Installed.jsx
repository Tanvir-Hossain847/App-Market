import React, { useEffect, useState } from 'react';
import Installedcard from '../../components/InstalledCard/Installedcard';
import useApp from '../../hooks/useApp';
import { getInstalledApp } from '../../utility/installFunction';
import ErrorApp from '../../components/ErrorApp/ErrorApp';
import Loader from '../../components/loader/Loader';
import { AArrowUp, ArrowDown, ArrowUp } from 'lucide-react';

const Installed = () => {

    const [appData, setAppData] = useState([]);
    const {apps, loading} = useApp()
    const [sort, setSort] = useState("")
    const [isDelayedLoading, setIsDelayedLoading] = useState(true)

    useEffect(() =>{
        const delay = setTimeout(() => {
            setIsDelayedLoading(false)
        },750)

        return () => clearTimeout(delay)
    }, [loading])


    useEffect(() => {
        if(!apps || apps.length === 0) return;

        const storedAppData = getInstalledApp()
        const convertedAppData = storedAppData.map(id => parseInt(id))
        const installedApps = apps.filter(app => convertedAppData.includes(app.id)
        )
        setAppData(installedApps)
        },[apps])


        const handleRemove = (id) => {
            const updatedAppData = appData.filter((app) => app.id !== id)
            setAppData(updatedAppData)

            const storedAppData = getInstalledApp()
            const convertedAppData = storedAppData.map(id => parseInt(id));
            const updatedStoredData = convertedAppData.filter(appId => appId !== id)
            const updatedStoredDataSTR = JSON.stringify(updatedStoredData);
            localStorage.setItem("Installed", updatedStoredDataSTR)
        }

        const sortedItem = () =>{
            if(sort === "lower-higher"){
                return[...appData].sort((a,b) => b.downloads - a.downloads)
            }
            else if(sort === "higher-lower"){
                return[...appData].sort((a,b) => a.downloads - b.downloads)
            }
            else{
                return appData
            }
        }

        const sortData = sortedItem()
        

        // if(!appData.length) 
        //     return <ErrorApp></ErrorApp>
            

    return (
        <div className='min-h-105'>
            <div className="px-10 flex justify-between items-center py-6">
            <h2 className='text-2xl font-bold primary'>({sortData.length}) Apps Found</h2>
            <div className="">
                <select onChange={e => setSort(e.target.value)} defaultValue="Sort" className="select">
                <option value={"none"}>Sort</option>
                <option value={"lower-higher"}>By: Downloads <ArrowUp></ArrowUp></option>
                <option value={"higher-lower"}>By: Downloads <ArrowDown></ArrowDown></option>
                </select>
        </div>
        </div>
            <div className="">
           {loading || isDelayedLoading ? (
            <div className="">
            <Loader></Loader>
            </div>
           ) : appData.length > 0 ? (
            sortData.map(app => <Installedcard handleRemove={handleRemove} app={app}></Installedcard>)
           ) : <div className="text-center py-10">
            <ErrorApp></ErrorApp>
            <h1 className='text-5xl font-bold primary py-2'>No App Installed</h1>
            <p className='text-gray-500 primary'>No App Installed Yet</p>
           </div>
           }
           </div>
        </div>
    );
};

export default Installed;