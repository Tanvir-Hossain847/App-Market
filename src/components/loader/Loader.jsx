import { Orbitals } from '@joshk/react-spinners-css.orbitals';
import React from 'react';

const Loader = () => {
    return (
        <div className='text-center flex items-center gap-2 justify-center my-auto'>
            <h1 className='text-4xl font-bold'>L</h1>
            <Orbitals className='my-20'></Orbitals>
            <h1 className='text-4xl font-bold'>A D I N G</h1>
        </div>
    );
};

export default Loader;