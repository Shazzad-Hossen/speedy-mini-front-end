import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/anim/loadingAnim.json";


const LoadingSpinner = () => {
    return (
        <div className="w-100vw min-h-[100vh] flex justify-center items-center">
 <Lottie 
        className="max-w-[300px]"
        animationData={loadingAnimation}
        loop={true}
      />   </div>
    );
};

export default LoadingSpinner;