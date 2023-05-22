import React from 'react';
import Lottie from "lottie-react";
import errorAnim from "../assets/anim/error.json";
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='h-[100vh]   gap-10 w-full flex flex-col justify-center items-center'>
            <Lottie className='w-full max-w-[500px] min-w-[100px] h-full' animationData={errorAnim} loop={true} />
            <Link to='/' className='text-xl font-bold relative -top-28'>Back to home</Link>
        </div>
    );
};

export default Errorpage;