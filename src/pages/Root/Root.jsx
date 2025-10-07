import React from 'react';
import Navber from '../../components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>

            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;