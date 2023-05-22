import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className="">
        <Header/>
        <div className="max-w-[1280px] mx-auto px-5"><Outlet/></div>
        <Footer/>
        </div>
    );
};

export default Main;