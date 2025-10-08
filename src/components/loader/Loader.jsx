import { Orbitals } from '@joshk/react-spinners-css.orbitals';
import React from 'react';

const Loader = () => {
    return (
        <div className='text-center flex'>
            <h1 className='text-4xl'>L</h1>
            <Orbitals className='my-20'></Orbitals>
            <h1 className='text-4xl'>ader</h1>
        </div>
    );
};

export default Loader;