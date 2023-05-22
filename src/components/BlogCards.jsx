import React from 'react';

const BlogCards = ({data}) => {
    return (
        <div className='border-2 rounded-lg  flex flex-col'>
            
            <img className='object-cover rounded-t-lg h-[350px] w-full' src={data.thumbnail} alt="" />
            
            <div className="p-4 mt-4">
                <h1 className='text-3xl font-bold'>{data.title}</h1>
                <p className='text-justify font-semibold text-[#575757] mt-10'>{data.description}</p>
            </div>
            
        </div>
    );
};

export default BlogCards;