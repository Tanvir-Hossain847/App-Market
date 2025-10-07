import React from 'react';
import useApp from '../../hooks/useApp';
import SingleApp from '../../components/SingleApp/SingleApp';

const App = () => {

    const {apps, loading} = useApp();


    return (
        <div className='grid grid-cols-4 gap-6 px-10 py-15'>
            {
                apps.map(app => <SingleApp app={app}></SingleApp>)
            }
        </div>
    );
};

export default App;