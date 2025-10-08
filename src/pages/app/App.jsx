import React, { useState } from 'react';
import useApp from '../../hooks/useApp';
import SingleApp from '../../components/SingleApp/SingleApp';
import { Search } from 'lucide-react';

const App = () => {

    const {apps, loading} = useApp();
    const [searchApp, setSearchApp] =useState("")
    const term = searchApp.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase() .includes(term)) : apps;
    console.log(searchedApps);
    


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
        <div className='grid grid-cols-4 gap-6 px-10'>
            {
                searchedApps.map(app => <SingleApp app={app}></SingleApp>)
            }
        </div>
        </div>
    );
};

export default App;