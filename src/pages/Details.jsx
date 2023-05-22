import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import LoadingSpinner from '../components/LoadingSpinner';

const Details = () => {
    const[data,setData]=useState(useLoaderData());
    const {_id, tname, category, photo, price, quantity, ratings, sellerEmail, sellerName, desc}=data
    const navigation = useNavigation();
 if(navigation.state==='loading') {
  return <LoadingSpinner/>
 }
    return (
        <div className='my-20'>
            <div className="flex flex-col md:flex-row gap-5">
                <img className='border-2 p-2  w-[500px] ' src={photo} alt="" />
                <div className=" flex flex-col gap-2 justify-start">
                    <h1 className='text-2xl font-bold '>{tname}</h1>
                    <p className='text-lg font-semibold mb-3 text-[#333333]'>Category: <span className='font-medium text-[#3d3d3d]'>{category}</span> </p>
                    
                    <p className='text-md font-semibold text-[#333333]'>Price: <span className='font-medium text-[#3d3d3d]'>{price} BDT</span> </p>
                    <p className='text-md font-semibold text-[#333333]'>Available quantity: <span className='font-medium text-[#3d3d3d]'>{quantity} pcs</span> </p>
                    <p className='text-md font-semibold text-[#333333]'><ReactStarsRating className="flex gap-2" size={15} isHalf={true} isEdit={false} value={Number(ratings)} /> </p>

                    <p className='text-md font-semibold text-[#333333]'>Seller: <span className='font-medium text-[#3d3d3d]'>{sellerName} </span> </p>
                    <p className='text-md font-semibold text-[#333333]'>Contact seller: <span className='font-medium text-[#3d3d3d]'>{sellerEmail} </span> </p>
                </div>
            </div>

            <p className='mt-8'>Descriptions: {desc}</p>
            
        </div>
    );
};

export default Details;