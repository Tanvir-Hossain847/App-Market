import React, { useEffect, useState } from 'react';
import Installedcard from '../../components/InstalledCard/Installedcard';
import useApp from '../../hooks/useApp';
import { getInstalledApp } from '../../utility/installFunction';
import ErrorApp from '../../components/ErrorApp/ErrorApp';

const Installed = () => {

    const [appData, setAppData] = useState([]);
    const {apps} = useApp()

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

        // if(!appData.length) 
        //     return <ErrorApp></ErrorApp>
            

    return (
        <div className='min-h-133'>
           {appData.length > 0 ? (
            appData.map(app => <Installedcard handleRemove={handleRemove} app={app}></Installedcard>)
           ) : <div className="text-center py-10">
            <ErrorApp></ErrorApp>
            <h1 className='text-5xl font-bold primary py-2'>No App Installed</h1>
            <p className='text-gray-500 primary'>No App Installed Yet</p>
           </div>
           }
        </div>
    );
};

export default Installed;